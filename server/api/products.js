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

router.get('/add', async (req, res, next) => {
  try {
    let artists = await Artists.findAll()
    res.json(artists)
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

router.post('/', isAdmin, async (req, res, next) => {
  // couldn't figure out how to get the input into req.body, so just did it via parameter
  try {
    console.log('REQ BODY', req.body)
    // let productName = req.params.productName
    if (req.body) {
      // let newProduct = {name: productName}
      let createdProduct = await Products.create(req.body)
      res.status(201).send(createdProduct)
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
    let product = await Products.findByPk(id)

    if (product) {
      await product.destroy()
      res.sendStatus(204)
      // .json(product) this was giving error that can't set headers after they are sent to client
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

router.put('/:id', isAdmin, async (req, res, next) => {
  try {
    await Products.update(req.body, {
      returning: true,
      where: {
        id: req.params.id
      }
    }).then(([product]) => {
      res.json(product)
    })
  } catch (error) {
    next(error)
  }
})
