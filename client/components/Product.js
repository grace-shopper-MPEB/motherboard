import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteRobot} from '../redux/robots'

export const Product = props => {
  const product = props.product

  return (
    <div key={product.id} className="item">
      <img src={product.imgUrl} className="product-info" />
      <h3>{product.albumTitle}</h3>
      <div>{product.artist}</div>
      <div>{product.genre}</div>
      <div>{product.price}</div>
      {/* // { Add a button feature to buy record } */}
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch(deleteRobot(id))
  }
}

export default connect(null, mapDispatchToProps)(Robot)
