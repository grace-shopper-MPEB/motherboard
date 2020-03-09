import React from 'react'
import Loading from './Loading'

export class AlbumGenres extends React.Component {
  componentDidMount() {
    const genre = this.props.location.pathname.slice(17)
    console.log(genre)
    this.props.getProductsByGenre(genre)
  }

  render() {
    if (!this.props.genreProducts) {
      return <Loading />
    }
    if (this.props.genreProducts) {
      return (
        <div>
          <h1>
            All albums of the {this.props.location.pathname.slice(17)} genre:
          </h1>
          <div className="all-products-container">
            <div className="all-products">
              {this.props.genreProducts
                ? this.props.genreProducts.map(x => (
                    <div key={x.id} className="item">
                      <img src={x.imgUrl} className="product-info all-images" />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default AlbumGenres
