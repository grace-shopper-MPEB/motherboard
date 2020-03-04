const Sequelize = require('sequelize')
const db = require('../db')

const Albums = db.define('album', {
  artworkUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/G3sdIcN.jpg'
  },

  albumTitle: {
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

  genre: {
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
    type: Sequelize.INTEGER,
    allowNull: false
  },

  retailPrice: {
    type: Sequelize.INTEGER,
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

module.exports = Albums
