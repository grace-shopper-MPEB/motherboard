/* global describe beforeEach it */

/* global describe beforeEach it */
const {expect} = require('chai')
const {db, Users} = require('../models')

// describe('User model', () => {
//   beforeEach(() => db.sync({force: true}))
//   describe('column definitions and validations', () => {
//     it('has a `fullName`, `email`, `password`, `street`, `number`, `zip`, `state`, `country`, and `createdAt`', () => {
//       return Users.create({
//         fullName: 'John Smith',
//         email: 'johnsmith@gmial.com',
//         password: 'password',
//         street: 'Main',
//         number: 1,
//         zip: 12345,
//         city: 'Washington',
//         state: 'DC',
//         country: 'USA',
//         createdAt: new Date()
//       }).then(payment => {
//         expect(payment.full_name).to.equal('John Smith')
//         expect(payment.email).to.equal('johnsmith@gmial.com')
//         expect(payment.password).to.equal('password')
//         expect(payment.street).to.equal('Main')
//         expect(payment.number).to.equal(1)
//         expect(payment.zip).to.equal(12345)
//         expect(payment.city).to.equal('Washington')
//         expect(payment.state).to.equal('DC')
//         expect(payment.country).to.equal('USA')
//         expect(payment.createdAt).to.equal(new Date())
//       })
//     })
//   })
// })
