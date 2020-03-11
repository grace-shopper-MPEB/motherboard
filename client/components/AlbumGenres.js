import React from 'react'

export class AlbumGenres extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true,
      x: 0,
      y: 12
    }
  }
  componentDidMount() {
    const genre = this.props.location.pathname.slice(17)
    console.log(genre)
    this.props.getProductsByGenre(genre)
    this.setState({loading: false})
  }

  //pagination
  nextPage(x, y) {
    if (y + 12 >= this.props.genreProducts.length) {
      this.setState({x: x + 12})
      this.setState({y: this.props.genreProducts.length})
    } else {
      this.setState({x: x + 12})
      this.setState({y: y + 12})
    }
  }

  prevPage(x, y) {
    if (x - 12 < 0) {
      this.setState({x: 0})
      this.setState({y: 12})
    } else {
      this.setState({x: x - 12})
      this.setState({y: y - 12})
    }
  }

  render() {
    const {loading} = this.state.loading

    if (loading) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }

    const albumsByGenre = this.props.genreProducts
      ? this.props.genreProducts
      : []

    let albumsByGenreSubArray = [...albumsByGenre].slice(
      this.state.x,
      this.state.y
    )

    return (
      <div>
        <h1>
          All albums of the {this.props.location.pathname.slice(17)} genre:
        </h1>
        <div className="all-products-container">
          <div className="all-products">
            {this.props.genreProducts
              ? albumsByGenreSubArray.map(x => (
                  <div key={x.id} className="item">
                    <img src={x.imgUrl} className="product-info all-images" />
                  </div>
                ))
              : null}
            <button
              onClick={() => this.prevPage(this.state.x, this.state.y)}
              className="all buyButton"
              type="button"
            >
              Prev Page
            </button>
            <button
              onClick={() => this.nextPage(this.state.x, this.state.y)}
              className="all buyButton"
              type="button"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumGenres
