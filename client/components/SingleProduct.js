import React from 'react'
import {connect} from 'react-redux'
import {toast} from 'react-toastify'
import {Link} from 'react-router-dom'
import {addToCartThunk} from '../store/cart'
import {getProductsById} from '../store/products'

class SingleProduct extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      quantity: 1
    }
  }

  componentDidMount() {
    const id = this.props.location.pathname.slice(10)
    this.props.getProductsById(id)
  }

  handleClick() {
    const productId = this.props.location.pathname.slice(10)
    let quantity = {
      quantity: this.state.quantity
    }
    this.props.addToCart(productId, quantity)
    toast.success('Added to Cart!')
  }

  handleChange() {
    this.setState({
      quantity: event.target.value
    })
  }

  render() {
    const product = this.props.singleProduct.product
      ? this.props.singleProduct.product
      : {}
    const albums = this.props.singleProduct.albums
      ? this.props.singleProduct.albums
      : {}
    const genres = this.props.singleProduct.genres
      ? this.props.singleProduct.genres
      : {}

    return (
      <div className="single-album-container">
        <div className="single-album">
          <div className="single-image">
            <img src={product.imgUrl} />
          </div>
          <div className="single-album-details">
            <div className="single-title">{product.albumTitle}</div>
            <div className="single-price">${product.price / 100}</div>
            <div className="select">
              <label htmlFor="quantity">Quantity</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={this.handleChange}
              />
            </div>
            <button
              onClick={this.handleClick}
              className="buyButton"
              type="button"
            >
              Add to Cart
            </button>
            <div className="single-artist">
              Artist: {product.artist ? product.artist.artistName : null}
            </div>
            <div className="single-genre">
              Genre:
              <Link to={`/products/genres/${product.genre}`}>
                {product.genre}
              </Link>
            </div>
            <div className="single-description">{product.description}</div>
            <div>
              More albums by {product.artist ? product.artist.artistName : null}
              :
              <div className="all-products-container">
                <div className="all-products">
                  {this.props.singleProduct.albums
                    ? this.props.singleProduct.albums.map(x => (
                        <div key={x.id} className="item">
                          <img
                            src={x.imgUrl}
                            className="product-info all-images"
                          />
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.product
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productId, quantity) =>
      dispatch(addToCartThunk(productId, quantity)),
    getProductsById: id => dispatch(getProductsById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
