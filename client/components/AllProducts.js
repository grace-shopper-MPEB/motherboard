import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'

export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    if (this.props.products) {
      return (
        <div>
          {this.props.products.map(product => (
            <div key={product.id}>
              <img src={product.imgUrl} />
              <div>{product.albumTitle}</div>
              <div>{product.artist}</div>
              <div>{product.genre}</div>
              <div>{product.description}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </div>
      )
    }
    return <h1>All records out of stock. Come back soon!</h1>
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
