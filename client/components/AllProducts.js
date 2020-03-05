import React from 'react'
import {Product} from './'

// Needs React Router
export class AllProducts extends React.Component {
  componentDidMount() {
    // nothing here yet
  }

  render() {
    const products = this.props.allProducts
    if (products) {
      return (
        <div className="all-products-container">
          <div className="all-products">
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )
    }
    return <h1>All records out of stock. Come back soon!</h1>
  }
}

export default AllProducts
