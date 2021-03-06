const {expect} = require('chai')
const {Products} = require('../models')
const db = require('../db')

describe('Products model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('column definitions and validations', () => {
    it('has a `genre` `albumTitle` `description` `price` `retailPrice` `SKU` and `stock`', () => {
      return Products.create({
        genre: 'Rock',
        albumTitle: 'Mothership',
        description: 'Description...',
        price: 2000,
        retailPrice: 1999,
        SKU: '123ER54',
        stock: 100
      }).then(album => {
        expect(album.genre).to.equal('Rock')
        expect(album.albumTitle).to.equal('Mothership')
        expect(album.description).to.equal('Description...')
        expect(album.price).to.equal(2000)
        expect(album.retailPrice).to.equal(1999)
        expect(album.SKU).to.equal('123ER54')
        expect(album.stock).to.equal(100)
      })
    })
    it('`genre` is required', () => {
      const album = Products.build()
      return album.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`albumTitle` is required', () => {
      const album = Products.build()
      return album.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })

    it('`description` is required', () => {
      const album = Products.build()
      return album.validate().then(
        () => {
          throw new Error('Validation should have failed!')
        },
        err => {
          expect(err).to.be.an('error')
        }
      )
    })
  })
})
