const router = require('express').Router()
const {Users, Products, Orders} = require('../db/models')

const {isAdmin} = require('./utils')

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await Users.findAll({
      attributes: ['id', 'email']
    })
    return res.json(users)
  } catch (err) {
    next(err)
  }
})

// eslint-disable-next-line complexity
router.get('/cart', async (req, res, next) => {
  try {
    let id = 0
    if (req.user) {
      id = req.user.id
    }

    let user = await Users.findByPk(id)

    let cart = {}

    if (!req.session.cart) {
      req.session.cart = {
        isCart: true,
        subTotal: 0,
        totalAmount: 0,
        shippingCost: 0,
        submitDate: '2020-02-28 17:36:36',
        promoCode: '',
        products: []
      }
    }

    if (id > 0) {
      cart = await Orders.findOne({
        where: {
          userId: id,
          isCart: true
        },
        include: [{model: Products}]
      })

      let sessionProducts = req.session.cart.products

      if (sessionProducts && sessionProducts.length > 0) {
        if (!cart) {
          console.log('5, hey, there was no cart')
          cart = await Orders.create({
            isCart: true,
            subTotal: 0,
            totalAmount: 0,
            shippingCost: 0,
            submitDate: '2020-02-28 17:36:36',
            promoCode: ''
          })

          user.addOrder(cart)
        }
        for (let i = 0; i < sessionProducts.length; i++) {
          let product = await Products.findByPk(sessionProducts[i].id)
          await cart.addProduct(product)
        }
      }
    } else {
      cart = req.session.cart
    }

    return res.json(cart)
  } catch (error) {
    next(error)
  }
})

router.post('/cart/:productId', async (req, res, next) => {
  try {
    let userId = 0
    if (req.user) {
      userId = req.user.id
    }
    let productId = req.params.productId
    let product = await Products.findByPk(productId)

    //loged in user
    if (userId > 0) {
      let user = await Users.findByPk(userId)
      let openOrder = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        }
      })
      if (openOrder) {
        await openOrder.addProduct(product)
      } else {
        let order = await Orders.create({
          isCart: true,
          subTotal: 0,
          totalAmount: 0,
          shippingCost: 0,
          submitDate: '2020-02-28 17:36:36',
          promoCode: ''
        })
        await order.addProduct(product)
        await user.addOrder(order)
      }
      const order = await Orders.findOne({
        where: {
          userId: req.user.id
        },
        include: [{model: Products}]
      })
      return res.json(order)

      //guest user
    } else {
      if (req.session.cart && req.session.cart.products) {
        req.session.cart.products.push(product)
      } else {
        req.session.cart = {
          isCart: true,
          subTotal: 0,
          totalAmount: 0,
          shippingCost: 0,
          submitDate: '2020-02-28 17:36:36',
          promoCode: '',
          products: [product]
        }
      }
      return res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/cart/:productId', async (req, res, next) => {
  try {
    let userId = 0
    if (req.user) {
      userId = req.user.id
    }
    let productId = req.params.productId
    let product = await Products.findByPk(productId)

    //logged in user

    //let user = await Users.findByPk(userId)
    if (userId > 0) {
      let cart = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        }
      })
      await cart.removeProduct(product)
      let newCart = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        },
        include: [{model: Products}]
      })
      return res.json(newCart)
    }

    //guest user

    if (req.session.cart && req.session.cart.isCart) {
      let revisedProducts = req.session.cart.products.filter(productX => {
        return productX.id !== Number(productId)
      })

      req.session.cart.products = revisedProducts
      return res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/entirecart/:cartId', async (req, res, next) => {
  try {
    req.session.cart = {}
    let cartId = req.params.cartId

    if (cartId > 0) {
      let cart = await Orders.findByPk(cartId)
      console.log('hey, whats up', cart)
      cart.isCart = false
      cart.status = 'Ready to Shipped'
      await cart.save()
    }

    res.sendStatus(200)
  } catch (error) {
    console.log('errrrrorrrrr')
    next(error)
  }
})

module.exports = router
