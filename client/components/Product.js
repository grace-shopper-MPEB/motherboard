import React from 'react'
import {Link} from 'react-router-dom'

export const Product = props => {
  const product = props.product

  return (
    <div key={product.id} className="item">
      <Link to={`/products/${product.id}`}>
        <img src={product.imgUrl} className="product-info all-images" />
      </Link>
      <Link className="all-album-title" to={`/products/${product.id}`}>
        <h3>{product.albumTitle}</h3>
      </Link>
      {/* <div className="all-artist">{
        product.artist.artistName
      }</div> */}
      <div className="all-price">${product.price / 100}</div>
      <button className="buyButton" type="button">
        Add to Cart
      </button>
    </div>
  )
}
