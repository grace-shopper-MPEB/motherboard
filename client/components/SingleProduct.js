import React from 'react'
import {connect} from 'react-redux'

export class SingleProduct extends React.Component {
  componentDidMount() {}

  render() {
    return <div>It works</div>
  }
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
