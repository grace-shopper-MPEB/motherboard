const configureStripe = require('stripe')

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === 'production'
    ? 'sk_test_3WrQA3QvzLDaU12Nk2KUieqf004xAeRtEY'
    : 'sk_test_3WrQA3QvzLDaU12Nk2KUieqf004xAeRtEY'
const stripe = configureStripe(STRIPE_SECRET_KEY)
module.exports = stripe
