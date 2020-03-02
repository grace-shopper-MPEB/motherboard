const Sequelize = require('sequelize')
const db = require('../db')

const Payments = db.define('payment', {
  cardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  expirationDate: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  securityCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  state: {
    type: Sequelize.STRING
  },

  country: {
    type: Sequelize.STRING
  }
})

module.exports = Payments

