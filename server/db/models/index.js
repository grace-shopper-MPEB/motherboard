const Users = require('./users')
const Orders = require('./orders')
const Payments = require('./payments')
const Products = require('./products')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

// Users.hasMany(Orders)
// Orders.belongsTo(Users)

// Users.hasMany(Payments)
// Payments.hasOne(Users)

// Orders.belongsToMany(Products)
// Products.belongsToMany(Orders)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Users,
  Products
}
