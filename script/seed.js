'use strict'

const db = require('../server/db')
const {Users, Products, Payments, Orders} = require('../server/db/models')
const dummyProducts = require('../server/dummyData/dummyProducts.js')
const dummyUsers = require('../server/dummyData/dummyUsers.js')
const dummyPayments = require('../server/dummyData/dummyPayments.js')
const dummyOrders = require('../server/dummyData/dummyOrders.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')
  await Users.bulkCreate(dummyUsers)
  await Products.bulkCreate(dummyProducts)
  await Payments.bulkCreate(dummyPayments)
  await Orders.bulkCreate(dummyOrders)
  try {
    for (let i = 0; i < 50; i++) {
      let order = await Orders.findByPk(i)
      for (let j = 0; j < i % 5; j++) {
        let product = await Products.findByPk(Math.floor(Math.random() * 500))
        await order.addProduct(product)
      }
    }
  } catch (error) {
    console.log(error)
  }

  try {
    for (let i = 0; i < 50; i++) {
      let user = await Users.findByPk(i)
      for (let j = 0; j < i % 5; j++) {
        let order = await Orders.findByPk(Math.floor(Math.random() * 500))
        await user.addOrder(order)
      }
    }
  } catch (error) {
    console.log(error)
  }

  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
