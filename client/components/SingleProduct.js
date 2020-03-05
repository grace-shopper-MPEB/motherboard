import React from 'react'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.location.pathname.slice(10)
    this.props.getProductsById(id)
  }

  render() {
    const product = this.props.singleProduct.product
      ? this.props.singleProduct.product
      : {}
    const albums = this.props.singleProduct.albums
      ? this.props.singleProduct.albums
      : {}
    console.log(albums)

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
            <button className="buyButton" type="button">
              Add to Cart
            </button>
            <div className="single-artist">
              Artist: {product.artist ? product.artist.artistName : null}
            </div>
            <div className="single-genre">Genre: {product.genre}</div>
            <div className="single-description">{product.description}</div>
            <div>
              More albums by {product.artist ? product.artist.artistName : null}
              : {albums.albumTitle}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleProduct
