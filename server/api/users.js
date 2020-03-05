const router = require('express').Router()
const {Users} = require('../db/models')
module.exports = router
const {isAdmin} = require('./utils')

router.get('/', isAdmin, async (req, res, next) => {
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
