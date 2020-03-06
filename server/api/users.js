const router = require('express').Router()
const {Users, Products, Orders} = require('../db/models')

const {isAdmin} = require('./utils')

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await Users.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/cart/:id', async (req, res, next) => {
  try {
    let id = req.params.id
    let orders = {}

    if (id > 0) {
      orders = await Orders.findAll({
        where: {
          userId: id,
          isCart: true
        },
        include: [{model: Products}]
      })
    } else {
      orders = req.session.cart
    }

    res.json(orders)
  } catch (error) {
    next(error)
  }
})

router.post('/cart/:userId/:productId', async (req, res, next) => {
  try {
    let userId = req.params.userId
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
      res.json(req.params.userId)

      //guest user
    } else {
      if (!req.session.cart) {
        req.session.cart = []
      }
      let found = false

      for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].isCart === true) {
          req.session.cart[i].products.push(product)
          found = true
        }
      }
      if (found === false) {
        let order = {
          isCart: true,
          subTotal: 0,
          totalAmount: 0,
          shippingCost: 0,
          submitDate: '2020-02-28 17:36:36',
          promoCode: '',
          products: [product]
        }
        req.session.cart.push(order)
      }
      res.json(req.params.userId)
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/cart/:userId/:productId', async (req, res, next) => {
  try {
    let userId = req.params.userId
    let productId = req.params.productId
    let product = await Products.findByPk(productId)

    //logged in user
    if (userId > 0) {
      let user = await Users.findByPk(userId)
      let order = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        }
      })

      await order.removeProduct(product)

      res.json(req.params.userId)

      //guest user
    } else {
      console.log('before!!!!!!!', req.session)
      console.log('productId', typeof Number(productId))
      for (let i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].isCart === true) {
          let revisedOrder = req.session.cart[i].products.filter(productX => {
            console.log(typeof productX.id)
            return productX.id !== Number(productId)
          })
          console.log('revisedOrder', revisedOrder)
          req.session.cart[i].products = revisedOrder
        }
      }

      console.log('after', req.session)
      // sessions stuff
      res.json(req.session.cart)
    }
  } catch (error) {
    console.log('errrrrorrrrr')
    next(error)
  }
})

module.exports = router
