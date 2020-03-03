const Sequelize = require('sequelize')
const db = require('../db')

const Payments = db.define('payment', {
  cardNumber: {
    type: Sequelize.BIGINT,
    allowNull: false
  },

  expirationDate: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  securityCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  street: {
    type: Sequelize.STRING,
    allowNull: false
  },

  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  city: {
    type: Sequelize.STRING
  },

  state: {
    type: Sequelize.STRING
  },

  country: {
    type: Sequelize.STRING
  }
})

module.exports = Payments
