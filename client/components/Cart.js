import React from 'react'
import axios from 'axios'

export class Cart extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    if (this.props.user.id) {
      this.props.getCart(this.props.user.id)
    } else {
      this.props.getCart(0)
    }
  }

  async handleClick(productId) {
    let userId = 0
    if (this.props.user.id) {
      userId = this.props.user.id
    }
    const x = await axios.delete(`/api/users/cart/${userId}/${productId}`)
    this.props.getCart(userId)
    console.log(x.data)
  }

  render() {
    console.log('PROPS', this.props)

    console.log('345542525', this.props.cart.cart)
    let orders = this.props.cart.cart

    if (orders) {
      return (
        <div>
          <div>Your Cart</div>
          <div>
            {orders.map(order => (
              <div key={order.id}>
                <div>
                  {order.products.map(product => (
                    <div key={product.id}>
                      <img src={product.imgUrl} />
                      <div>title: {product.albumTitle}</div>
                      <div>Quantity: </div>
                      <div>Price: ${product.price} </div>
                      <button
                        type="button"
                        onClick={() => this.handleClick(product.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <button type="submit">Update</button>
          </div>
          <div>
            <button type="submit">Checkout</button>
          </div>
        </div>
      )
    } else {
      return <div>there is nothing in your cart</div>
    }
  }
}

export default Cart
