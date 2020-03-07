const router = require('express').Router()
const {Users, Products, Orders} = require('../db/models')

const {isAdmin} = require('./utils')

router.get('/', isAdmin, async (req, res, next) => {
  try {
    const users = await Users.findAll({
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
    let cart = {}

    if (id > 0) {
      cart = await Orders.findOne({
        where: {
          userId: id,
          isCart: true
        },
        include: [{model: Products}]
      })
    } else {
      cart = req.session.cart
    }

    res.json(cart)
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
      if (req.session.cart) {
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
      //let user = await Users.findByPk(userId)
      let cart = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        }
      })

      await cart.removeProduct(product)

      res.json(req.params.userId)

      //guest user
    } else {
      if (req.session.cart.isCart) {
        let revisedProducts = req.session.cart.products.filter(productX => {
          return productX.id !== Number(productId)
        })

        req.session.cart.products = revisedProducts
      }

      res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
