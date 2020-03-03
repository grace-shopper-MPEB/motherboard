import React from 'react'
import {Link} from 'react-router-dom'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = this.props.location.pathname.slice(10)
    this.props.getProductsById(id)
  }

  render() {
    const product = this.props.products.product
    return (
      <div>
        <img src={product.imgUrl} />
        <div>{product.albumTitle}</div>
        <div>{product.artist}</div>
        <div>{product.genre}</div>
        <div>{product.price}</div>
        <div>
          <Link to="/products">Go Back</Link>
        </div>
      </div>
    )
  }
}

export default SingleProduct
