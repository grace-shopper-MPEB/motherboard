import React from 'react'
import {connect} from 'react-redux'
import {Product} from './'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {addToCartThunk} from '../store/cart'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // nothing here yet
  }

  handleClick(productId) {
    this.props.addToCart(productId)
    toast.success('Added to Cart!')
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productId => dispatch(addToCartThunk(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
