import * as types from './../types/users'

/**
 * Initial user state
 */
const initialUserState = {
    users: [],
    inputUserSearch: ""
}
  
/**
 * User reducer
 * @param {*} state 
 * @param {*} param1 
 */
const userReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case types.UPDATE_USER_SEARCH:
            return {
                inputUserSearch: payload.inputUserSearch
            }
        case types.GET_USERS:
            return {
                users: payload.users,
                inputUserSearch: state.inputUserSearch
            }
        case types.GET_USER_BY_ID:
            return state.users.map(user =>
                user.id === payload.id ?
                  { ...user } :
                  user
              )
        default:
            return state
    }
}

export default userReducer