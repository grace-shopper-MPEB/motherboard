import React from 'react'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.location.pathname.slice(10)
    this.props.getProductsById(id)
  }

  render() {
    const product = this.props.products.product
    return (
      <div className="single-album-container">
        <div className="single-album">
          <div className="single-image">
            <img src={product.imgUrl} />
          </div>
          <div className="single-album-details">
            <div className="single-title">{product.albumTitle}</div>
            <div className="single-price">${product.price}</div>
            <button className="buyButton" type="button">
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
