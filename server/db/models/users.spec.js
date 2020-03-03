/* global describe beforeEach it */

/* global describe beforeEach it */
const {expect} = require('chai')
const User = db.model('payment')

describe('Payments model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('column definitions and validations', () => {
    it('has a `full_name`, `email`, `password`, `street`, `number`, `zip`, `state`, `country`, and `created_at`', () => {
      return Payments.create({
        full_name: 'John Smith',
        email: 'johnsmith@gmial.com',
        password: 'password',
        street: 'Main',
        number: 1,
        zip: 12345,
        city: 'Washington',
        state: 'DC',
        country: 'USA',
        created_at: new Date()
      }).then(payment => {
        expect(payment.full_name).to.equal(123455566)
        expect(payment.email).to.equal(1022)
        expect(payment.password).to.equal(123)
        expect(payment.street).to.equal('John')
        expect(payment.number).to.equal('Smith')
        expect(payment.zip).to.equal('Main')
        expect(payment.number).to.equal(1)
        expect(payment.zip).to.equal(12345)
        expect(payment.city).to.equal('Washington')
        expect(payment.state).to.equal('DC')
        expect(payment.country).to.equal('USA')
        expect(payment.country).to.equal(new Date())
      })
    })
  })
})
