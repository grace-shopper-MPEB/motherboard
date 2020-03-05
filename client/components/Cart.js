import React from 'react'

export class Cart extends React.Component {
  componentDidMount() {
    if (this.props.user.id) {
      this.props.getCart(this.props.user.id)
    } else {
      this.props.getCart(0)
    }
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
