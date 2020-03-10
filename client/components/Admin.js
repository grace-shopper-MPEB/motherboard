import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Product} from './'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import {editProduct, deleteProductThunk, getProducts} from '../store/products'

class Admin extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  handleDelete(productId) {
    this.props.deleteProduct(productId)
    toast.success('Deleted Product')
  }

  render() {
    const products = this.props.allProducts

    if (products) {
      return (
        <div className="all-products-container">
          <div className="all-products">
            <div className="row">
              <Link className="button" to="/products/add">
                Add Product
              </Link>
            </div>

            {products.map(product => (
              <div key={product.id}>
                <Product product={product} />
                <button
                  onClick={() => this.handleDelete(product.id)}
                  className="all buyButton"
                  type="button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return <h1>All records out of stock. Come back soon!</h1>
  }
}

const mapState = state => {
  return {
    allProducts: state.products.products
  }
}

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(getProducts()),
    deleteProduct: productId => dispatch(deleteProductThunk(productId))
  }
}

export default connect(mapState, mapDispatch)(Admin)
