import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export class SingleProduct extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    const id = this.props.location.pathname.slice(10)
    this.props.getProductsById(id)
  }

  async handleClick() {
    let userId = 0
    if (this.props.user.id) {
      userId = this.props.user.id
    }
    let productId = this.props.singleProduct.product.id
    await axios.post(`/api/users/cart/${userId}/${productId}`)
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
              <input id="quantity" type="number" name="quantity" />
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
            <div className="albums-by">
              More albums by {product.artist ? product.artist.artistName : null}
              :
              <div>
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

export default SingleProduct
