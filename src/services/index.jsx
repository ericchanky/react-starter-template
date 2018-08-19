
/**
 *
 * map redux types to array of async functions
 *
 * example:
 * const register = {
 *   [types.fetchAPI]: [api.fetchResource]
 * }
 */
const register = {}

export default ({ dispatch, getState }) => next => action => {
  const nextAction = next(action)

  const state = getState()
  const tasks = register[nextAction.type] || []
  tasks.reduce((p, task) => p.then(() => task(state, dispatch)), Promise.resolve())

  return nextAction
}
