const Sequelize = require('sequelize')
const crypto = require('crypto')
const db = require('../db')

const Users = db.define('user', {
  fullName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },

  number: {
    type: Sequelize.STRING,
    allowNull: false
  },

  zip: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  city: {
    type: Sequelize.STRING,
    allowNull: false
  },

  state: {
    type: Sequelize.STRING,
    allowNull: false
  },

  country: {
    type: Sequelize.STRING,
    allowNull: false
  },

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },

  googleId: {
    type: Sequelize.STRING,
    allowNull: true
  },

  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  }
})

module.exports = Users

/**
 * instanceMethods
 */
Users.prototype.correctPassword = function(candidatePwd) {
  return Users.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
Users.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Users.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = user => {
  if (user.changed('password')) {
    user.salt = Users.generateSalt()
    user.password = Users.encryptPassword(user.password(), user.salt())
  }
}

Users.beforeCreate(setSaltAndPassword)
Users.beforeUpdate(setSaltAndPassword)
Users.beforeBulkCreate(users => {
  users.forEach(setSaltAndPassword)
})

module.exports = Users
