import uuidv4 from 'uuid/v4'

export const arrayMapToObject = (values, keys) => keys.reduce((acc, cur, i) => ({
  ...acc,
  [cur]: values[i],
}), {})

export const withPrefix = (string, prefix = '') => {
  if (prefix === '') {
    return string
  }

  return `${prefix.toUpperCase()}_${string}`
}

export const toSnakeCase = string => string
  .replace(/[A-Z][a-z]/g, s => `_${s.toLowerCase()}`)
  .replace(/[A-Z]+/g, s => `_${s.toLowerCase()}`)
  .replace(/\d+/g, s => `_${s}`)
  .replace(/^_/, '')
  .toUpperCase()

export const createAction = (actions, prefix) => Object.entries(actions).reduce((acc, [key, value]) => {
  const type = withPrefix(toSnakeCase(key), prefix)

  return {
    types: {
      ...acc.types,
      [key]: type,
    },
    action: {
      ...acc.action,
      [key]: (...data) => ({
        id: uuidv4(),
        data: arrayMapToObject(data, value),
        type,
      }),
    },
  }
}, {})

export const createReducer = (initialState, reducers) => (state = initialState, action) => {
  const reducer = reducers[action.type]

  if (typeof reducer === 'function') {
    return reducer(state, action.data)
  }

  return state // return original state if no reducer
}
