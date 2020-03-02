/* global describe beforeEach it */

/* global describe beforeEach it */
const {expect} = require('chai')
const Users = db.model('user')

describe('Users model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('column definitions and validations', () => {
    it('has a `full_name`, `email`, `password`, `street`, `number`, `zip`, `state`, `country`, and `created_at`', () => {
      return Users.create({
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
      })
      .then(user => {
        expect(user.full_name).to.equal(123455566)
        expect(user.email).to.equal(1022)
        expect(user.password).to.equal(123)
        expect(user.street).to.equal('John')
        expect(user.number).to.equal('Smith')
        expect(user.zip).to.equal('Main')
        expect(user.number).to.equal(1)
        expect(user.zip.).to.equal(12345)
        expect(user.city).to.equal('Washington')
        expect(user.state).to.equal('DC')
        expect(user.country).to.equal('USA')
        expect(user.country).to.equal(new Date())
      })
    })
  })
})
