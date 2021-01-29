import * as types from './../types/repos'

/**
 * Update repository search
 * @param {*} inputValue 
 */
export const updateRepoSearch = (inputValue) => (dispatch) =>
  dispatch({
    type: types.UPDATE_REPO_SEARCH,
    payload: { inputRepoSearch: inputValue }
  })

/**
 * Get repositories
 * @param {*} repos 
 */
export const getRepos = (repos) => (dispatch) =>
  dispatch({
    type: types.GET_REPOS,
    payload: { repos }
  })

/**
 * Get repository by id
 * @param {*} id 
 */
export const getRepoById = (id) => (dispatch) =>
  dispatch({
    type: types.GET_REPO_BY_ID,
    payload: { id }
  })