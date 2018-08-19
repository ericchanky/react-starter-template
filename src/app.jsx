import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor} from './store'
import Router from './router'

// global style
const style = (
  <style jsx global>{`
    body {
      margin: 0;
      font-size: 16px;
      padding: 0;
      letter-spacing: 1px;
    }
  `}</style>
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            {style}
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

render(<App />, document.getElementById('app'))
