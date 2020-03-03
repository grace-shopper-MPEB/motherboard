import axios from 'axios'

// ***********************************
// This file needs an initialState as well as logic for the
// action creators, thunks, and reducer. Delete this when complete.
// ***********************************

const initialState = {
  products: [],
  product: []
}

// Action Types:
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_PRODUCT_BY_ID = 'SET_PRODUCT_BY_ID'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

// Actions:
const setProducts = products => {
  return {
    type: SET_PRODUCTS,
    products
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

// Thunks:
export const getProducts = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/products')
    dispatch(setProducts(data))
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
  try {
    const {data} = await axios.post(`/api/products`, product)
    dispatch(addProduct(data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductById = id => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/products/${id}`)
    dispatch(deleteProduct(id))
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = product => async dispatch => {
  try {
    const {data} = await axios.put(`/api/products/${id}`)
    dispatch(setProductById(data))
  } catch (error) {
    console.log(error)
  }
}

// Reducer
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}
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
    default:
      return state
  }
}

export default productsReducer
