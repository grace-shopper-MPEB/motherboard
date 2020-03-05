const router = require('express').Router()
const {Artists} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    let artists = await Artists.findAll()
    res.json(artists)
  } catch (error) {
    next(error)
  }
})

// router.get(`/:id`, async (req, res, next) => {
//   try {
//     const id = req.params.id
//     const artist = await Artists.findByPk(id)
//     res.json(artist)
//   } catch (error) {
//     next(error)
//   }
// })
