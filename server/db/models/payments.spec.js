/* global describe beforeEach it */
const {expect} = require('chai')
const db = require('../db')
const Payments = require('./payments')

describe('Payments model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('column definitions and validations', () => {
    it('has a `cardNumber`, `expirationDate`, `securityCode`, `firstName`, `lastName`, `street`, number`, `zip`, `state`, `country`', () => {
      return Payments.create({
        cardNumber: 123455566,
        expirationDate: 1022,
        securityCode: 123,
        firstName: 'John',
        lastName: 'Smith',
        street: 'Main',
        number: 1,
        zip: 12345,
        city: 'Washington',
        state: 'DC',
        country: 'USA'
      }).then(payment => {
        expect(payment.cardNumber).to.equal('123455566')
        expect(payment.expirationDate).to.equal(1022)
        expect(payment.securityCode).to.equal(123)
        expect(payment.firstName).to.equal('John')
        expect(payment.lastName).to.equal('Smith')
        expect(payment.street).to.equal('Main')
        expect(payment.number).to.equal(1)
        expect(payment.zip).to.equal(12345)
        expect(payment.city).to.equal('Washington')
        expect(payment.state).to.equal('DC')
        expect(payment.country).to.equal('USA')
      })
    })
  })
})
