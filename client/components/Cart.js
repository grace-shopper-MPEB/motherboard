import React from 'react'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart(2)
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
                <div>{order.totalAmount}</div>
                <div>
                  {order.products.map(product => (
                    <div key={product.id}>
                      <img src={product.imgUrl} />
                      <div>{product.albumTitle}</div>
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
    }
  }
}

export default Cart
