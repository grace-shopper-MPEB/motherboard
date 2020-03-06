import React from 'react'

export class AlbumGenres extends React.Component {
  componentDidMount() {
    const genre = this.props.location.pathname.slice(17)
    console.log(genre)
    this.props.getProductsByGenre(genre)
  }

  render() {
    console.log('myprops', this.props.genreProducts)

    return (
      <div>
        {' '}
        All albums of the {this.props.location.pathname.slice(17)} genre:
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

export default AlbumGenres
