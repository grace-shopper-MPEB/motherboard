const {expect} = require('chai')
const {Products} = require('../models')
const db = require('../db')

describe('Products model', () => {
  beforeEach(() => db.sync({force: true}))
  describe('column definitions and validations', () => {
    it('has a `genre` `artist` `albumTitle` `description` `price` `retailPrice` `SKU` and `stock`', () => {
      return Products.create({
        genre: 'Rock',
        artist: 'Led Zeppelin',
        albumTitle: 'Mothership',
        description: 'Description...',
        price: 20.0,
        retailPrice: 19.99,
        SKU: '123ER54',
        stock: 100
      }).then(album => {
        expect(album.genre).to.equal('Rock')
        expect(album.artist).to.equal('Led Zeppelin')
        expect(album.albumTitle).to.equal('Mothership')
        expect(album.description).to.equal('Description...')
        expect(album.price).to.equal(20.0)
        expect(album.retailPrice).to.equal(19.99)
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

    it('`artist` is required', () => {
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
