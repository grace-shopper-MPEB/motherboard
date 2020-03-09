import React from 'react'
import {Link} from 'react-router-dom'

export class FeaturedProducts extends React.Component {
  componentDidMount() {}

  render() {
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

    console.log('pops', albumsByPopularity)

    return (
      <div className="all-products-container">
        <div className="all-products">
          <h1>Top 5 albums by popularity:</h1>

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
    )
  }
}

export default FeaturedProducts
