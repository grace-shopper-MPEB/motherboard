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
  Cart,
  Checkout
} from './components'
import {me} from './store'
import {getProducts, getProductsById} from './store/products'
import {getUsers} from './store/user'
import {getCart} from './store/cart'

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
            <AllProducts {...this.props} allProducts={this.props.allProducts} />
          )}
        />
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
        <Route path="/users/cart" render={() => <Cart {...this.props} />} />
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

    getUsers: () => dispatch(getUsers()),
    getCart: id => dispatch(getCart(id))
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
