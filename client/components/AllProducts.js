import React from 'react'
import {connect} from 'react-redux'
import {Product} from './'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {addToCartThunk} from '../store/cart'
import {incrementPopularityThunk} from '../store/products'
import axios from 'axios'
class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // nothing here yet
  }

  handleClick(product) {
    this.props.addToCart(product.id)
    toast.success('Added to Cart!')
    this.props.incrementPopularity(product)
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
                  onClick={() => this.handleClick(product)}
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
    addToCart: productId => dispatch(addToCartThunk(productId)),
    incrementPopularity: productId =>
      dispatch(incrementPopularityThunk(productId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
