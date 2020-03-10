import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div id="nav-items">
    <div id="top-of-navbar">
      <Link to="/products" id="page-title">
        FullStack Records
      </Link>
      <Link to="/users/cart" id="cart-link">
        <div>Cart</div>
        <img
          id="cart-img"
          src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png?width=500&height=500"
        />
      </Link>
    </div>

    <nav id="bottom-of-navbar">
      {isLoggedIn ? (
        <div>
          <Link to="/home">Home</Link>
          <Link to="/products">All Records</Link>
          <Link to="/products/featured">Featured Records</Link>
          <Link to="/users">Users</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="public-navbar">
          {/* The navbar will show these links before you log in */}
          <Link to="/home">Home</Link>
          <Link to="/products">Albums</Link>
          <Link to="/products/featured">Featured Albums</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
