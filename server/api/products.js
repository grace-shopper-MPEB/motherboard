const router = require('express').Router()
const {Products, Artists} = require('../db/models')

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
    const product = await Products.findByPk(id, {
      include: [Artists]
    })
    const albums = await Products.findAll({
      where: {artistId: product.dataValues.artistId}
    })
    res.json({product, albums})
  } catch (error) {
    next(error)
  }
})

/**********************************
 * THE BELOW ROUTES HAVE NOT BEEN TESTED
 ***********************************/
router.post('/:productName', async (req, res, next) => {
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

router.delete('/:productId', async (req, res, next) => {
  try {
    let productId = req.params.productId
    let product = await Robot.findById(productId)

    if (product) {
      await product.destroy()
      res.sendStatus(204).json(deletedProduct)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})
router.put('/:productId/', async (req, res, next) => {
  try {
    let currProductId = req.params.productId
    let newData = {name: 'New Name'}
    let product = await Products.findById(currProductId)

    if (product) {
      const updatedProduct = await product.update(newData)
      res.status(200).send(updatedProduct)
    } else {
      res.sendStatus(404)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
