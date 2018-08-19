import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Immutable from 'seamless-immutable'
import Services from '../services'
import { name } from '../../package.json'

import { reducer as route } from './route'

const transform = createTransform(
  inboundState => inboundState,
  outboundState => Immutable(outboundState), // make it immutable when rehydrate
)

const persistConfig = {
  key: name,
  storage,
  transforms: [transform],
  blacklist: ['route'],
}

const reducer = persistReducer(persistConfig, combineReducers({
  route,
}))

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(Services),
  ),
)

export const persistor = persistStore(store)
