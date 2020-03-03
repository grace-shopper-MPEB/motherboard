const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('product', {
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: './server/db/images/default.jpeg'
  },

  genre: {
    type: Sequelize.STRING,
    allowNull: false,
    validations: {
      notEmpty: true
    }
  },

  artist: {
    type: Sequelize.STRING,
    allowNull: false,
    validations: {
      notEmpty: true
    }
  },

  albumTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    validations: {
      notEmpty: true
    }
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validations: {
      notEmpty: true
    }
  },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  retailPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  SKU: {
    type: Sequelize.STRING,
    allowNull: true
  },

  stock: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = Products
