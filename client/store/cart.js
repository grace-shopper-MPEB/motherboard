import axios from 'axios'

const initialState = {}

const SET_CART = 'SET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

const setCart = cart => {
  return {
    type: SET_CART,
    cart
  }
}

const addToCart = cart => {
  return {
    type: ADD_TO_CART,
    cart
  }
}

const removeFromCart = cart => {
  return {
    type: REMOVE_FROM_CART,
    cart
  }
}

export const getCartThunk = () => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/cart`)
    dispatch(setCart(data))
  } catch (error) {
    console.log(error)
  }
}

export const addToCartThunk = (productId, quantity) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/users/cart/${productId}`, quantity)
    dispatch(addToCart(data))
  } catch (error) {
    console.log(error)
  }
}

export const removeFromCartThunk = productId => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/users/cart/${productId}`)
    dispatch(removeFromCart(data))
  } catch (error) {
    console.log(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    case ADD_TO_CART:
      return action.cart
    case REMOVE_FROM_CART:
      return action.cart
    default:
      return state
  }
}
