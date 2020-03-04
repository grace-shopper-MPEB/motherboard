const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('product', {
  imgUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/G3sdIcN.jpg'
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
    type: Sequelize.TEXT,
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
