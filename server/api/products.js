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
