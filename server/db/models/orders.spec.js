const {expect} = require('chai')
const {Orders} = require('../models')
const db = require('../db')

describe('Orders model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('column definitions and validations', () => {
    it('has a `isCart` `status` `subTotal` `totalAmount` `shippingCost` `submitDate` and `promoCode`', () => {
      return Orders.create({
        isCart: true,
        status: 'completed',
        subTotal: 20,
        totalAmount: 25,
        shippingCost: 5,
        submitDate: new Date(),
        promoCode: '10OFF'
      }).then(order => {
        expect(order.isCart).to.equal(true)
        expect(order.status).to.equal('completed')
        expect(order.subTotal).to.equal(20)
        expect(order.totalAmount).to.equal(25)
        expect(order.shippingCost).to.equal(5)
        expect(order.promoCode).to.equal('10OFF')
      })
    })
  })
})
