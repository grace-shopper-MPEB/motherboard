import axios from 'axios'

// ***********************************
// This file needs an initialState as well as logic for the
// action creators, thunks, and reducer. Delete this when complete.
// ***********************************

const initialState = {}

// Action Types:
const SET_USERS = 'SET_USERS'
const SET_USER_BY_ID = 'SET_USER_BY_ID'
const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

// Actions:
const setUsers = users => {}

const setUserById = user => {}

const addUser = user => {}

const deleteUser = id => {}

// Thunks:
export const getUsers = () => async dispatch => {}

export const getUserById = id => async dispatch => {}

export const addedUser = user => async dispatch => {}

export const deleteUserById = id => async dispatch => {}

// Reducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default usersReducer
