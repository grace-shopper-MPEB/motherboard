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
      albumName: '',
      artistName: ''
    }
  }

  componentDidMount() {
    this.setState({loading: false})
    this.props.fetchProducts()
  }

  handleClick(productId, product) {
    this.props.addToCart(productId, 1)

    toast.success('Added to Cart!')
    this.props.incrementPopularity(product)
  }

  albumSearch(event) {
    this.setState({albumName: event.target.value})
    console.log(event.target.value)
  }

  artistSearch(event) {
    this.setState({artistName: event.target.value})
    console.log(event.target.value)
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
      if (this.state.albumName && !this.state.artistName) {
        return product.albumTitle.indexOf(this.state.albumName) !== -1
      } else {
        return product.artist.artistName.indexOf(this.state.artistName) !== -1
      }
    })

    const products = this.props.allProducts
    console.log(filteredProducts)
    const user = this.props.user

    if (products) {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h3>Filter by Album Title:</h3>
            <input
              type="text"
              placeholder="Album Name"
              value={this.state.albumName}
              onChange={this.albumSearch.bind(this)}
            />
          </form>
          <form onSubmit={this.handleSubmit}>
            <h3>Filter by Artist Name:</h3>
            <input
              type="text"
              placeholder="Artist Name"
              value={this.state.artistName}
              onChange={this.artistSearch.bind(this)}
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
    addToCart: (productId, quantity) =>
      dispatch(addToCartThunk(productId, quantity)),

    incrementPopularity: productId =>
      dispatch(incrementPopularityThunk(productId)),
    fetchProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
