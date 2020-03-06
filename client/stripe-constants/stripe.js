const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === 'production'
    ? 'pk_live_MY_PUBLISHABLE_KEY'
    : 'pk_test_cwiuAXtvngECpiKeSZdFdZ7D00Pw4CMsL8'
export default STRIPE_PUBLISHABLE
