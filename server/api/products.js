const router = require('express').Router()
const {Products, Artists} = require('../db/models')
module.exports = router

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
