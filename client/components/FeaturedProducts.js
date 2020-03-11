import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'

class FeaturedProducts extends Component {
  componentDidMount() {}

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    console.log('FEAT ALL', this.props)
    let ids = []

    for (let i = 0; i < 3; i++) {
      ids.push(Math.floor(Math.random() * 500))
    }

    const products = this.props.allProducts

    let albumsByPopularity = [...products]
    albumsByPopularity.sort(function(a, b) {
      return b.popularity - a.popularity
    })

    albumsByPopularity = albumsByPopularity.slice(0, 5)

    // console.log('pops', albumsByPopularity)

    return (
      <div>
        <h1>Top 5 albums by popularity:</h1>
        <div className="all-products-container">
          <div className="all-products">
            {albumsByPopularity.map(album => (
              <div key={album.id}>
                <Link to={`/products/${album.id}`}>
                  <img
                    src={album.imgUrl}
                    className="product-info all-images"
                    id="product-img"
                  />
                </Link>
                )
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allProducts: state.products.products,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: () => dispatch(getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProducts)
