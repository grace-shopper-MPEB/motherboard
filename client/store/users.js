import axios from 'axios'

const initialState = {
  users: [],
  user: []
}

// Action Types:
const SET_USERS = 'SET_USERS'
const SET_USER_BY_ID = 'SET_USER_BY_ID'
const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

// Actions:

export const setUsers = users => {
  return {
    type: SET_USERS,
    users
  }
}

export const setUserById = user => {
  return {
    type: SET_USER_BY_ID,
    user
  }
}

export const addUser = user => {
  return {
    type: ADD_USER,
    user
  }
}

export const deleteUser = id => {
  return {
    type: DELETE_USER,
    id
  }
}

// Thunks:
export const getUsers = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/users')
    dispatch(setUsers(data))
  } catch (error) {
    console.log(error)
  }
}

export const getUserById = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/users/${id}`)
    dispatch(setUserById(data))
  } catch (error) {
    console.log(error)
  }
}

export const addedUser = user => async dispatch => {
  try {
    const {data} = await axios.post(`/api/users`, user)
    dispatch(addUser(data))
  } catch (error) {
    console.log(error)
  }
}

export const deleteUserById = id => async dispatch => {
  try {
    const {data} = await axios.delete(`/api/users/${id}`)
    dispatchf(deleteUser(id))
  } catch (error) {
    console.log(error)
  }
}

// Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case SET_USERS:
    //   return {...state, users: action.users}
    case SET_USERS:
      return [...users], action.users
    case SET_USER_BY_ID:
      return {...state, user: action.user}
    case ADD_USER:
      return {
        ...state,
        user: action.user,
        users: [...state.users, action.user]
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      return state
  }
}

export default usersReducer
