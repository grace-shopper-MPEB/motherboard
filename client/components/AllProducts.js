import React from 'react'
import {Product} from './'
import axios from 'axios'
import {Link} from 'react-router-dom'

// Needs React Router
export class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // nothing here yet
  }

  async handleClick(productId) {
    let userId = 0
    if (this.props.user.id) {
      userId = this.props.user.id
    }
    await axios.post(`/api/users/cart/${userId}/${productId}`)
  }

  render() {
    const products = this.props.allProducts
    const user = this.props.user
    if (products) {
      return (
        <div className="all-products-container">
          <div className="all-products">
            {user.isAdmin === true && (
              <div className="row">
                <Link className="button" to="/products/add">
                  Add Product
                </Link>
              </div>
            )}
            {products.map(product => (
              <div key={product.id}>
                <Product product={product} />
                <button
                  onClick={() => this.handleClick(product.id)}
                  className="all buyButton"
                  type="button"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return <h1>All records out of stock. Come back soon!</h1>
  }
}

export default AllProducts
