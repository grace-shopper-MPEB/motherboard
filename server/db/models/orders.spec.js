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
        subTotal: 20.0,
        totalAmount: 25.0,
        shippingCost: 5.0,
        submitDate: new Date(),
        promoCode: '10OFF'
      }).then(order => {
        expect(order.isCart).to.equal(true)
        expect(order.status).to.equal('completed')
        expect(order.subTotal).to.equal(20.0)
        expect(order.totalAmount).to.equal(25.0)
        expect(order.shippingCost).to.equal(5.0)
        expect(order.promoCode).to.equal('10OFF')
      })
    })
  })
})
