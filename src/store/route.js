import Immutable from 'seamless-immutable'
import { createAction, createReducer } from '../utils/redux'

export const { types, action } = createAction({
  changePage: ['page'],
}, 'route')

export default action

const initialState = Immutable({
  currentPage: '',
})

export const reducer = createReducer(initialState, {
  [types.changePage]: (state, { page }) => state.merge({ currentPage: page }),
})
