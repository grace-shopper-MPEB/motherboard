import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'

// Needs React Router

export class AllProducts extends React.Component {
  componentDidMount() {
    // this.props.getProducts()
  }

  render() {
    console.log('PROPS2', this.props)
    const products = this.props.products.products

    if (products) {
      return (
        <div className="all-products">
          <h1>Records</h1>
          {products.map(product => (
            <div key={product.id}>
              <img src={product.imgUrl} className="product-info" />
              <div>{product.albumTitle}</div>
              <div>{product.artist}</div>
              <div>{product.genre}</div>
              <div>{product.price}</div>
              {/* // { Add a button feature to buy record } */}
            </div>
          ))}
        </div>
      )
    }
    return <h1>All records out of stock. Come back soon!</h1>
  }
}

export default AllProducts

// // const mapDispatchToProps = dispatch => {
// //   return {
// //     getProducts: () => dispatch(getProducts())
// //   }
// // }

// export default connect(mapStateToProps)(AllProducts)
