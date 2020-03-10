import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'
import {Link} from 'react-router-dom'
import STRIPE_PUBLISHABLE from '../stripe-constants/stripe'
import PAYMENT_SERVER_URL from '../stripe-constants/server'

const CURRENCY = 'USD'

const fromEuroToCent = amount => amount * 100
const errorPayment = data => {
  alert('Payment Error')
}

export class Checkout extends React.Component {
  constructor({name, description, amount}) {
    super()
    this.name = name
    this.description = description
    this.amount = amount
    this.onToken = this.onToken.bind(this)
    this.successPayment = this.successPayment.bind(this)
  }
  successPayment = data => {
    alert('Payment Successful')
  }

  onToken = (amount, description) => token =>
    axios
      .post('/api/payments', {
        description,
        source: token.id,
        currency: CURRENCY,
        amount: fromEuroToCent(amount)
      })
      .then(this.successPayment)
      .then(async () => {
        let id = 0
        if (this.props.cart.id) {
          id = this.props.cart.id
        }
        await axios.put(`/api/users/entirecart/${id}`)
        this.props.fetchCart()
      })
      .catch(errorPayment)

  render() {
    if (this.props.user.id) {
      return (
        <StripeCheckout
          name={this.name}
          description={this.description}
          amount={fromEuroToCent(this.amount)}
          token={this.onToken(this.amount, this.description)}
          currency={CURRENCY}
          stripeKey={STRIPE_PUBLISHABLE}
        />
      )
    } else {
      return (
        <div>
          <Link to="/login">Please login to checkout</Link>
        </div>
      )
    }
  }
}
