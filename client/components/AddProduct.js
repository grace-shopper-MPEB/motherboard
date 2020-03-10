import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addedProduct, getArtists} from '../store/products'

export class AddProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albumTitle: '',
      genre: '',
      price: '',
      description: '',
      retailPrice: '',
      stock: '',
      artistId: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('EVENT VALUE', event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(evt) {
    // if (evt.key === "Enter") {
    evt.preventDefault()
    console.log('THIS STATE', this.state)
    //   this.props.add(this.state);
    this.props.add(this.state)
    this.setState({
      albumTitle: '',
      genre: '',
      price: '',
      description: '',
      retailPrice: '',
      stock: '',
      artistId: ''
    })
    // }
  }

  render() {
    const artists = this.props.artists
    return (
      <div className="add-product">
        <h1>Add Product</h1>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="albumTitle">Album Title:</label>
          <input
            type="text"
            name="albumTitle"
            placeholder="Enter Album Title..."
            value={this.state.albumTitle}
            onChange={this.handleChange}
            //   onChange={evt => this.setState({ input: evt.target.value })}
            onSubmit={this.handleSubmit}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={this.state.price}
            onChange={this.handleChange}
            //   onChange={evt => this.setState({ input: evt.target.value })}
            // onSubmit={this.handleSubmit}
          />

          <label htmlFor="retailPrice">Retail Price:</label>
          <input
            type="text"
            name="retailPrice"
            placeholder="Retail Price"
            value={this.state.retailPrice}
            onChange={this.handleChange}
            //   onChange={evt => this.setState({ input: evt.target.value })}
            // onSubmit={this.handleSubmit}
          />

          <label htmlFor="stock">Stock:</label>
          <input
            type="text"
            name="stock"
            placeholder="Stock"
            value={this.state.stock}
            onChange={this.handleChange}
            //   onChange={evt => this.setState({ input: evt.target.value })}
            // onKeyDown={this.handleKey}
            onSubmit={this.handleSubmit}
          />

          <label htmlFor="genre">Genre:</label>
          <input
            type="text"
            name="genre"
            placeholder="Genre"
            value={this.state.genre}
            onChange={this.handleChange}
            //   onChange={evt => this.setState({ input: evt.target.value })}
            onSubmit={this.handleSubmit}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChange}
            //   onChange={evt => this.setState({ input: evt.target.value })}
            onSubmit={this.handleSubmit}
          />

          <label htmlFor="artistId">Artist:</label>
          <select
            value={this.state.artistId}
            name="artistId"
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          >
            {artists.map(artist => (
              <option key={artist.id} value={artist.id}>
                {artist.artistName}
              </option>
            ))}
          </select>

          <button
            className="buyButton"
            type="submit"
            // onClick={() => {
            //     this.props.add(this.state.input);
            //     this.setState({ input: "" });
            // }}
          >
            Add Product
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    // addProduct: product => dispatch(addedProduct(product)),
    getArtists: () => dispatch(getArtists())
  }
}

// export default AddProduct
export default connect(null, mapDispatch)(AddProduct)
