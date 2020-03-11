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
      artistName: '',
      x: 0,
      y: 12
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

  albumSearch(event) {
    this.setState({albumName: event.target.value})
    console.log(event.target.value)
  }

  artistSearch(event) {
    this.setState({artistName: event.target.value})
    console.log(event.target.value)
  }

  //pagination
  nextPage(x, y) {
    if (y + 12 > this.props.allProducts.length) {
      this.setState({x: x + 12})
      this.setState({y: this.props.allProducts.length})
    } else {
      this.setState({x: x + 12})
      this.setState({y: y + 12})
    }
  }

  prevPage(x, y) {
    if (x - 12 < 0) {
      this.setState({x: 0})
      this.setState({y: 12})
    } else {
      this.setState({x: x - 12})
      this.setState({y: y - 12})
    }
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
    const user = this.props.user

    //Pagination
    // let x = 0
    // let y = 12

    let filteredProductsSubArray = [...filteredProducts].slice(
      this.state.x,
      this.state.y
    )
    console.log(this.state.x, this.state.y, filteredProductsSubArray)
    // const nextPage = () => {
    //   if (y + 12 > products.length) {
    //     x = x + 12
    //     y = products.length
    //   } else {
    //     x = x + 12
    //     y = y + 12
    //   }
    //   filteredProductsSubArray = [...filteredProducts].slice(x,y)
    //   this.forceUpdate();
    //   console.log(x, y, filteredProductsSubArray)
    // }

    // const prevPage = () => {
    //   if (x - 12 < 0) {
    //     x = 0
    //     y = 12
    //   } else {
    //     x = x - 12
    //     y = y - 12
    //   }
    //   filteredProductsSubArray = [...filteredProducts].slice(x,y)
    //   console.log(x, y, filteredProductsSubArray)
    // }

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
              {filteredProductsSubArray.map(product => (
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
              <button
                onClick={() => this.prevPage(this.state.x, this.state.y)}
                className="all buyButton"
                type="button"
              >
                Prev Page
              </button>
              <button
                onClick={() => this.nextPage(this.state.x, this.state.y)}
                className="all buyButton"
                type="button"
              >
                Next Page
              </button>
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
