/* eslint-disable max-statements */
const router = require('express').Router()
const {Users, Products, Orders, OrdersProducts} = require('../db/models')

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
    let userId = 0
    let sessionId = 0
    let user = await Users.findByPk(userId)
    if (req.user) {
      userId = req.user.id
    }
    if (req.session.userId) {
      sessionId = req.session.userId
    }
    let userCart = await Orders.findOne({
      where: {
        userId: userId,
        isCart: true
      },
      include: [{model: Products}]
    })
    let sessionCart = await Orders.findOne({
      where: {
        id: sessionId,
        isCart: true
      },
      include: [{model: Products}]
    })
    let cart = {}
    if (userCart && !sessionCart) {
      cart = userCart
    }
    if (sessionCart && !userCart) {
      if (user) {
        user.addOrder(sessionCart)
        cart = sessionCart
      } else {
        cart = sessionCart
      }
    }
    if (userCart && sessionCart) {
      let sessionProducts = sessionCart.products
      for (let i = 0; i < sessionProducts.length; i++) {
        let product = await Products.findByPk(sessionProducts[i].id)
        await userCart.addProduct(product)
      }
      req.session.userId = 0
      cart = userCart
    }
    return res.json(cart)
  } catch (error) {
    next(error)
  }
})

// eslint-disable-next-line max-statements
// eslint-disable-next-line complexity
// eslint-disable-next-line max-statements
// eslint-disable-next-line complexity
router.post('/cart/:productId', async (req, res, next) => {
  try {
    let productId = req.params.productId
    let product = await Products.findByPk(productId)
    let userId = 0
    let quantity = req.body.quantity
    if (req.user) {
      userId = req.user.id
    } else if (req.session.userId) {
      userId = req.session.userId
    }
    let openOrder = {}
    if (req.user) {
      openOrder = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        }
      })
    } else {
      openOrder = await Orders.findOne({
        where: {
          id: userId
        },
        include: [{model: Products}]
      })
    }
    if (openOrder) {
      await openOrder.addProduct(product)
      let associated = await OrdersProducts.findOne({
        where: {
          orderId: openOrder.id,
          productId: product.id
        }
      })
      associated.quantity = quantity
      associated.save()
    } else {
      let newOrder = await Orders.create({
        isCart: true,
        subTotal: 0,
        totalAmount: 0,
        shippingCost: 0,
        submitDate: '2020-02-28 17:36:36',
        promoCode: ''
      })
      await newOrder.addProduct(product)
      let associated = await OrdersProducts.findOne({
        where: {
          orderId: newOrder.id,
          productId: product.id
        }
      })
      associated.quantity = quantity
      associated.save()
      if (req.user) {
        let user = await Users.findByPk(userId)
        await user.addOrder(newOrder)
      } else {
        req.session.userId = newOrder.id
        userId = req.session.userId
      }
    }
    let order = {}
    if (req.user) {
      order = await Orders.findOne({
        where: {
          userId: userId
        },
        include: [{model: Products}]
      })
    } else {
      order = await Orders.findOne({
        where: {
          id: userId
        },
        include: [{model: Products}]
      })
    }
    return res.json(order)
  } catch (error) {
    next(error)
  }
})

router.delete('/cart/:productId', async (req, res, next) => {
  try {
    let productId = req.params.productId
    let product = await Products.findByPk(productId)
    let userId = 0

    if (req.user) {
      userId = req.user.id
    } else {
      userId = req.session.userId
    }

    let cart = {}
    if (req.user) {
      cart = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        }
      })
    } else {
      cart = await Orders.findOne({
        where: {
          id: userId,
          isCart: true
        }
      })
    }
    await cart.removeProduct(product)

    let newCart = {}
    if (req.user) {
      newCart = await Orders.findOne({
        where: {
          userId: userId,
          isCart: true
        },
        include: [{model: Products}]
      })
    } else {
      newCart = await Orders.findOne({
        where: {
          id: userId,
          isCart: true
        },
        include: [{model: Products}]
      })
    }
    return res.json(newCart)
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
