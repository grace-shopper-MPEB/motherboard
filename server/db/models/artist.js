const Sequelize = require('sequelize')
const db = require('../db')

const Artists = db.define('artist', {
  artistName: {
    type: Sequelize.STRING,
    allowNull: false,
    validations: {
      notEmpty: true
    }
  }
})

module.exports = Artists
