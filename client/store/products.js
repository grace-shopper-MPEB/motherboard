import axios from 'axios'

// ***********************************
// This file needs an initialState as well as logic for the
// action creators, thunks, and reducer. Delete this when complete.
// ***********************************

const initialState = {}

// Action Types:
const SET_PRODUCTS = 'SET_PRODUCTS'
const SET_PRODUCT_BY_ID = 'SET_PRODUCT_BY_ID'
const ADD_PRODUCT = 'ADD_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

// Actions:
const setProducts = products => {}

const setProductById = product => {}

const addProduct = product => {}

const deleteProduct = id => {}

// Thunks:
export const getProducts = () => async dispatch => {}

export const getProductsById = id => async dispatch => {}

export const addedProduct = product => async dispatch => {}

export const deleteProductById = id => async dispatch => {}

// Reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
