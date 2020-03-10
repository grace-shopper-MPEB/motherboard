import React from 'react'
import {connect} from 'react-redux'
import {Product} from './'
import {toast} from 'react-toastify'
import {addToCartThunk} from '../store/cart'
import {incrementPopularityThunk} from '../store/products'
import {getProducts} from '../store/products'

class AllProducts extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.setState({loading: false})
    this.props.fetchProducts()
  }

  handleClick(product) {
    this.props.addToCart(product.id)
    toast.success('Added to Cart!')
    this.props.incrementPopularity(product)
  }

  render() {
    const {loading} = this.state

    if (loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
    const products = this.props.allProducts
    const user = this.props.user
    if (products) {
      return (
        <div className="all-products-container">
          <div className="all-products">
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
    allProducts: state.products.products,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: productId => dispatch(addToCartThunk(productId)),
    incrementPopularity: productId =>
      dispatch(incrementPopularityThunk(productId))
    fetchProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
