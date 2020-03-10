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
      loading: true,
      search: ''
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

  updateSearch(event) {
    this.setState({search: event.target.value})
    console.log(this.state.search)
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

    let filteredProducts = this.props.allProducts.filter(product => {
      return product.albumTitle.indexOf(this.state.search) !== -1
    })

    const products = this.props.allProducts
    console.log(filteredProducts)
    const user = this.props.user

    if (products) {
      return (
        <div>
          <form>
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />
          </form>
          <div className="all-products-container">
            <div className="all-products">
              {filteredProducts.map(product => (
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
      dispatch(incrementPopularityThunk(productId)),
    fetchProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
