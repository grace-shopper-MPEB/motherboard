import React from 'react'

// Needs React Router

export class AllProducts extends React.Component {
  render() {
    const products = this.props.allProducts

    if (products) {
      return (
        <div className="heading">
          <h1>Records</h1>
          <div className="all-products">
            {products.map(product => (
              <Product product={product} index={product.id} key={product.id} />
            ))}
          </div>
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
