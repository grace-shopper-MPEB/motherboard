const Sequelize = require('sequelize')
const db = require('../db')

const Songs = db.define('song', {
  songName: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Songs
