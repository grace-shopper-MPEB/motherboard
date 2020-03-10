const router = require('express').Router()
const {Products, Artists} = require('../db/models')
module.exports = router
const {isAdmin} = require('./utils')

router.get('/', async (req, res, next) => {
  try {
    let products = await Products.findAll({
      include: [Artists]
    })
    res.json(products)
  } catch (error) {
    next(error)
  }
})

router.get(`/:id`, async (req, res, next) => {
  try {
    const id = req.params.id
    const products = await Products.findAll({
      include: [Artists]
    })

    console.log(products)
    const product = await Products.findByPk(id, {
      include: [Artists]
    })
    const albums = await Products.findAll({
      where: {artistId: product.dataValues.artistId}
    })

    const genres = await Products.findAll({
      where: {genre: product.dataValues.genre}
    })
    res.json({product, albums, genres})
  } catch (error) {
    next(error)
  }
})

/**********************************
 * THE BELOW ROUTES HAVE NOT BEEN TESTED
 ***********************************/
router.post('/:productName', isAdmin, async (req, res, next) => {
  // couldn't figure out how to get the input into req.body, so just did it via parameter
  try {
    let productName = req.params.productName
    if (productName) {
      let newProduct = {name: productName}
      let createdProduct = await Products.create(newProduct)
      res.send(createdProduct)
    } else {
      res.sendStatus(500)
    }
  } catch (error) {
    next(error)
  }
})

router.get(`/genres/:genre`, async (req, res, next) => {
  try {
    const genres = await Products.findAll({
      where: {genre: req.params.genre}
    })
    res.json(genres)
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', isAdmin, async (req, res, next) => {
  try {
    let id = req.params.id
    let product = await Products.findById(id)

    if (product) {
      await product.destroy()
      res.sendStatus(204).json(product)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
