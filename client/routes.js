import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Login,
  Signup,
  UserHome,
  AllProducts,
  SingleProduct,
  AllUsers,
  AlbumGenres,
  Cart,
  FeaturedProducts
} from './components'

import {me} from './store'
import Cart from './components/Cart'
import AllProducts from './components/AllProducts'
import SingleProduct from './components/SingleProduct'
import {
  getProducts,
  getProductsById,
  getProductsByGenre
} from './store/products'
import {getUsers} from './store/user'
import {getCartThunk} from './store/cart'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
    this.props.getProducts()
    this.props.getUsers()
  }

  render() {
    const {isLoggedIn} = this.props
    console.log('ROUTE PROPS', this.props, 'ROUTE STATE', this.state)
    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route
          exact
          path="/users"
          render={() => (
            <AllUsers {...this.props} allUsers={this.props.allUsers} />
          )}
        />
        <Route
          exact
          path="/products"
          render={() => (
            <AllProducts
              allProducts={this.props.allProducts}
              singleProduct={this.props.singleProduct}
            />
          )}
        />
        <Route
          path="/products/featured"
          render={() => (
            <FeaturedProducts
              {...this.props}
              singleProduct={this.props.singleProduct}
            />
          )}
        />
        <Route
          path="/products/genres/:genre"
          render={() => (
            <AlbumGenres
              {...this.props}
              genreProducts={this.props.genreProducts}
            />
          )}
        />
        {/* <Route path="/products/album-genre" render={() => <AlbumGenres {...this.props} />} /> */}
        <Route
          path="/products/:id"
          render={() => (
            <SingleProduct
              {...this.props}
              singleProduct={this.props.singleProduct}
            />
          )}
        />
        <Route path="/checkout" render={() => <Checkout />} />
        <Route path="/users/cart" render={() => <Cart />} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,

    products: state.products,
    cart: state.cart,
    user: state.user,

    allProducts: state.products.products,

    singleProduct: state.products.product,
    genreProducts: state.products.genreProducts,
    allUsers: state.user.users
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    },
    getProducts: () => dispatch(getProducts()),
    getProductsById: id => dispatch(getProductsById(id)),
    getProductsByGenre: genre => dispatch(getProductsByGenre(genre)),

    getUsers: () => dispatch(getUsers()),
    getCart: id => dispatch(getCartThunk(id)),
    me: () => dispatch(me())
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
