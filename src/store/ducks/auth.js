import { createActions, createReducer } from 'reduxsauce'

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  user: null,
  authenticating: false
}

const { Types, Creators } = createActions({
  loginRequest: ['username', 'password'],
  loginSuccess: ['token'],
  loginFailure: ['error'],
  logout: null
})

const Handlers = {
  [Types.LOGIN_REQUEST]: (state = INITIAL_STATE, { username, password }) => {
    return dispatch => {
      setTimeout(() => {
        dispatch(Creators.loginSuccess('teste'))
      }, 5000)
    }
  }
}

export default createReducer(INITIAL_STATE, Handlers)
