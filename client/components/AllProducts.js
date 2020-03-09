import React from 'react'
import {connect} from 'react-redux'
import {Product} from './'
import {toast} from 'react-toastify'
import {addToCartThunk} from '../store/cart'
import axios from 'axios'
import {updateProduct} from '../store'
// Needs React Router
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
    const user = await axios.get(`/api/products/${productId}`)
    const clicks = user.data.product.popularity
    await axios.put(`/api/products/${productId}`, {
      popularity: clicks + 1
    })
  }

  render() {
    const products = this.props.allProducts
    if (products) {
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
