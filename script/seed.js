'use strict'

const db = require('../server/db')
const {Users, Products} = require('../server/db/models')
// const dummyProducts = require('../server/dummyData/dummyProducts.js')
// const dummyUsers = require('../server/dummyData/dummyUsers.js')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  // const products = await Promise.all([
  //   //Seed with 500 products from dummy json products file
  //   Products.bulkCreate(dummyProducts)
  // ])
  // await Users.bulkCreate(dummyUsers)
  await Users.create({
    id: 1,
    fullName: 'bobby nixon',
    email: 'jscreen0@ask.com',
    city: 'Wash',
    street: 'sapien',
    number: 2,
    zip: 5,
    country: 'et',
    state: 'aliquet at',
    password: 'n18CVMgV'
  })

  // await Products.bulkCreate(dummyProducts)
  // console.log(`seeded ${products.length} products`)
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
