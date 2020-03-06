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
      let total = 0
      return (
        <div id="cart">
          <div id="your-cart">Your Cart</div>
          <div id="q-p">
            <div className="q">Quantity</div>
            <div className="p">Price</div>
          </div>

          <div>
            {orders.map(order => (
              <div key={order.id}>
                <div id="cart-items">
                  {order.products.map(product => {
                    total += product.price
                    return (
                      <div key={product.id} className="cart-item">
                        <div className="cart-comp">
                          <img className="cart-image" src={product.imgUrl} />
                          <div className="cart-title">{product.albumTitle}</div>
                        </div>
                        <div className="cart-comp">
                          <div className="cart-quantity"></div>
                          <div className="cart-price">
                            ${product.price / 100}{' '}
                          </div>
                          <button
                            className="remove-button"
                            type="button"
                            onClick={() => this.handleClick(product.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
          <div id="total">
            <div id="total-amount">Total: ${total / 100}</div>
          </div>
          <div id="cart-buttons">
            <div>
              <button className="cart-buttons" type="submit">
                Update
              </button>
            </div>
            <div>
              <button className="cart-buttons" type="submit">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )
    } else {
      return <div>there is nothing in your cart</div>
    }
  }
}

export default Cart
