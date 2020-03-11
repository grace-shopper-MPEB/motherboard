const Users = require('./users')
const Orders = require('./orders')
const Payments = require('./payments')
const Products = require('./products')
const Artists = require('./artist')
const Sequelize = require('sequelize')
const db = require('../db')
const OrdersProducts = db.define('orders_products', {
  quantity: {
    type: Sequelize.FLOAT,
    defaultValue: 1
  }
})

const Songs = require('./songs')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Users.hasMany(Orders)
Orders.belongsTo(Users)
Users.hasMany(Payments)
Payments.belongsTo(Users)
Artists.hasMany(Products)
Products.belongsTo(Artists)
Artists.hasMany(Songs)
Orders.belongsToMany(Products, {through: OrdersProducts})
Products.belongsToMany(Orders, {through: OrdersProducts})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Users,
  Products,
  Orders,
  Payments,
  Artists,
  Songs,
  OrdersProducts
}
