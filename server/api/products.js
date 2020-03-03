const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  // try {
  //   const products = await Products.findAll({
  //     // explicitly select only the id and email fields - even though
  //     // users' passwords are encrypted, it won't help if we just
  //     // send everything to anyone who asks!
  //     attributes: ['id', 'email']
  //   })s
  //   res.json(products)
  // } catch (err) {
  //   next(err)
  // }
})

router.get(`/:id`, async (req, res, next) => {
  try {
    const id = req.params.id
    const product = await Products.findByPk(id)
    res.json(product)
  } catch (error) {
    next(error)
  }
})
