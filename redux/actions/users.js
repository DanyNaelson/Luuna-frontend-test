import * as types from './../types/users'

/**
 * Update user search
 * @param {*} inputValue 
 */
export const updateUserSearch = (inputValue) => (dispatch) =>
  dispatch({
    type: types.UPDATE_USER_SEARCH,
    payload: { inputUserSearch: inputValue }
  })

/**
 * Get users
 * @param {*} users 
 */
export const getUsers = (users) => (dispatch) =>
  dispatch({
    type: types.GET_USERS,
    payload: { users }
  })

/**
 * Get user by id
 * @param {*} id 
 */
export const getUserById = (id) => (dispatch) =>
  dispatch({
    type: types.GET_USER_BY_ID,
    payload: { id }
  })