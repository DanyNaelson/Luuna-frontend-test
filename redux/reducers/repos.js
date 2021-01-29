import * as types from './../types/repos'

/**
 * Initial State
 */
const initialUserState = {
    repos: [],
    inputRepoSearch: ''
}
  
/**
 * Repo reducer
 * @param {*} state 
 * @param {*} param1 
 */
const repoReducer = (state = initialUserState, { type, payload }) => {
    switch (type) {
        case types.UPDATE_REPO_SEARCH:
            return {
                inputRepoSearch: payload.inputRepoSearch
            }
        case types.GET_REPOS:
            return {
                repos: payload.repos
            }
        case types.GET_REPO_BY_ID:
            return state.repos.map(repo =>
                repo.id === payload.id ?
                  { ...repo } :
                  repo
              )
        default:
            return state
    }
}

export default repoReducer