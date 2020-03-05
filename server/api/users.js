const router = require('express').Router()
const {Users, Products, Orders} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
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
    let orders = await Orders.findAll({
      where: {
        userId: id,
        isCart: true
      },
      include: [{model: Products}]
    })
    res.json(orders)
  } catch (error) {
    next(error)
  }
})
