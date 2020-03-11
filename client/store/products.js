import axios from 'axios'

const initialState = {
  products: [],
  product: [],
  genreProducts: [],
  artists: []
}

// ***********************************
// This file needs an initialState as well as logic for the
// action creators, thunks, and reducer. Delete this when complete.
// ***********************************

// Action Types:
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_PRODUCT_BY_ID = 'SET_PRODUCT_BY_ID'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'
const SET_PRODUCT_BY_GENRE = 'SET_PRODUCT_BY_GENRE'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const SET_ARTISTS = 'SET_ARTISTS'
const INCREMENT_POPULARITY = 'INCREMENT_POPULARITY'

// Actions:
const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products
  }
}

const setArtists = artists => {
  return {
    type: SET_ARTISTS,
    artists
  }
}

const setProductById = product => {
  return {
    type: SET_PRODUCT_BY_ID,
    product
  }
}

const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    product
  }
}

const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    id
  }
}

const setProductByGenre = genreProducts => {
  return {
    type: SET_PRODUCT_BY_GENRE,
    genreProducts
  }
}

export const editProductAction = product => ({type: EDIT_PRODUCT, product})

export const incrementPopularity = product => {
  return {
    type: INCREMENT_POPULARITY,
    product
  }
}

// Thunks:
export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(setProducts(data))
  } catch (error) {
    console.log(error)
  }
}

export const getArtists = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products/add')
    dispatch(setArtists(data))
  } catch (error) {
    console.log(error)
  }
}

export const getProductsById = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/${id}`)
    dispatch(setProductById(data))
  } catch (error) {
    console.log(error)
  }
}

export const addedProduct = product => async dispatch => {
  console.log('PRODUCT SUBMIT', product)
  try {
    const {data} = await axios.post(`/api/products`, product)
    dispatch(addProduct(data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductThunk = id => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/products/${id}`)
    dispatch(deleteProduct(id))
  } catch (error) {
    console.log(error)
  }
}

export const getProductsByGenre = genre => async dispatch => {
  try {
    const {data} = await axios.get(`/api/products/genres/${genre}`)
    dispatch(setProductByGenre(data))
  } catch (error) {
    console.log(error)
  }
}

export const incrementPopularityThunk = product => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${product.id}`, {
      popularity: product.popularity + 1
    })
    dispatch(incrementPopularity(data))
  } catch (err) {
    console.error(err)
  }
}

// export const getProductsByArtistId = (productId, artistId)  => async dispatch => {
//   try {
//     const {data} = await axios.get(`/api/products/${productId}`)
//     dispatch(setProductById(data))

//   } catch (error) {
//     console.log(error)
//   }
// }

// Reducer
// const productsReducer = (state = initialState, action) => {
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}
    case SET_ARTISTS:
      return {...state, artists: action.artists}
    case SET_PRODUCT_BY_ID:
      return {...state, product: action.product}
    case ADD_PRODUCT:
      return {
        ...state,
        product: action.product,
        products: [...state.products, action.product]
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.id)
      }
    case SET_PRODUCT_BY_GENRE:
      return {
        ...state,
        genreProducts: action.genreProducts
      }
    case INCREMENT_POPULARITY:
      return {
        ...state,
        products: [...state.products]
      }
    default:
      return state
  }
}

// export default productsReducer
