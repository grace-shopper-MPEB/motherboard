const Sequelize = require('sequelize')
const crypto = require('crypto')
const db = require('../db')

const Users = db.define('user', {
  fullName: {
    type: Sequelize.STRING
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
    type: Sequelize.STRING
  },

  number: {
    type: Sequelize.STRING
  },

  zip: {
    type: Sequelize.INTEGER
  },

  city: {
    type: Sequelize.STRING
  },

  state: {
    type: Sequelize.STRING
  },

  country: {
    type: Sequelize.STRING
  },

  createdAt: {
    type: Sequelize.DATE,
    allowNull: false
  },

  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
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
