import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GOT_USERS = 'GOT_USERS'
const GET_USER = 'GET_USER'
const REMOVE_USER = 'REMOVE_USER'

/**
 * INITIAL STATE
 */
const defaultUser = {}

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GOT_USERS, user})
const removeUser = () => ({type: REMOVE_USER})
const gotUsers = users => {
  return {
    type: GOT_USERS,
    users
  }
}
/**
 * THUNK CREATORS
 */

export const getUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(gotUsers(data))
  } catch (error) {
    console.log(error)
  }
}

export const me = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me')
    dispatch(getUser(res.data || defaultUser))
  } catch (err) {
    console.error(err)
  }
}

export const auth = (email, password, method) => async dispatch => {
  let res
  try {
    res = await axios.post(`/auth/${method}`, {email, password})
  } catch (authError) {
    return dispatch(getUser({error: authError}))
  }

  try {
    dispatch(getUser(res.data))
    history.push('/home')
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr)
  }
}

export const logout = () => async dispatch => {
  try {
    await axios.post('/auth/logout')
    dispatch(removeUser())
    history.push('/login')
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultUser, action) {
  switch (action.type) {
    case GOT_USERS:
      return {...state, users: action.users}
    case GET_USER:
      return action.user
    case REMOVE_USER:
      return defaultUser
    default:
      return state
  }
}
