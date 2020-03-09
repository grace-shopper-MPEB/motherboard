import React from 'react'
import {Product} from './'
import axios from 'axios'
import Loading from './Loading.js'
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

    return (
      <div className="all-products-container">
        <div className="all-products">
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
}

export default AllProducts
