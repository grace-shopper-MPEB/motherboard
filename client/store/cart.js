import axios from 'axios'

const initialState = {}

const SET_CART = 'SET_CART'

export const setCart = cart => {
  return {
    type: SET_CART,
    cart
  }
}

export const getCart = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/cart/${id}`)
    dispatch(setCart(data))
  } catch (error) {
    console.log(error)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return action.cart
    default:
      return state
  }
}
