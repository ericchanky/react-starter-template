import Register from '../utils/register'

import route from './route'

const register = new Register

// register service
route(register)

export default ({ dispatch, getState }) => next => action => {
  const nextAction = next(action)

  const state = getState()
  const tasks = register.store[nextAction.type] || []
  tasks.reduce((p, task) => p.then(() => task(state, dispatch)), Promise.resolve())

  return nextAction
}
