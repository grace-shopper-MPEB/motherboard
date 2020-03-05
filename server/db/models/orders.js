const Sequelize = require('sequelize')
const db = require('../db')

const Orders = db.define('order', {
  isCart: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },

  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'In Progress'
  },

  subTotal: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0.0
  },

  totalAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0.0
  },

  shippingCost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0.0
  },

  submitDate: {
    type: Sequelize.DATE,
    allowNull: false
  },

  promoCode: {
    type: Sequelize.STRING
  }
})

module.exports = Orders
