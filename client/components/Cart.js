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
        <div id="cart">
          <div id="your-cart">Your Cart</div>

          <div>
            <table>
              <thead>
                <tr id="cart-nav">
                  <th className="cart-img">image</th>
                  <th className="cart-title">title</th>
                  <th className="cart-quant">quantity</th>
                  <th className="cart-price">price</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <div key={order.id}>
                    {order.products.map(product => (
                      <div className="cart-productsX" key={product.id}>
                        <tr className="item">
                          <td className="cart-img">
                            <img className="cart-image" src={product.imgUrl} />
                          </td>
                          <td className="cart-title">{product.albumTitle}</td>
                          <td className="cart-price">{product.price}</td>
                        </tr>
                      </div>
                    ))}
                  </div>
                ))}
              </tbody>
            </table>
          </div>
          <div>Total: </div>
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
