import React from 'react'
import {Link} from 'react-router-dom'

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
              <div key={product.id} className="item">
                <Link to={`/products/${product.id}`}>
                  <img
                    src={product.imgUrl}
                    className="product-info all-images"
                  />
                </Link>
                <Link
                  className="all-album-title"
                  to={`/products/${product.id}`}
                >
                  <h3>{product.albumTitle}</h3>
                </Link>
                <div className="all-artist">{product.artist}</div>
                <div className="all-price">${product.price}</div>
                <button className="buyButton" type="button">
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
