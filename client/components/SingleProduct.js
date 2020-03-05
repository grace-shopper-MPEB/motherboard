import React from 'react'
import axios from 'axios'

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
    let productId = this.props.singleProduct.id
    const x = await axios.post(`/api/users/cart/${userId}/${productId}`)
    console.log('from hc', x.data)
  }

  render() {
    const product = this.props.singleProduct

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
            <div className="single-artist">Label: {product.artist}</div>
            <div className="single-genre">Genre: {product.genre}</div>
            <div className="single-description">{product.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProduct
