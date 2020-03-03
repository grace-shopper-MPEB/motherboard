const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let products = await Products.findAll()
    res.json(products)
  } catch (error) {
    next(error)
  }
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
