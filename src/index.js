import 'babel-polyfill'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Main from './containers/Main'

const store = configureStore()

const routes = [
  {
    path: '/',
    main: Main,
    exact: true
  }
]

render(
  <Provider store={store}>
    <Router>
      <div>
        {routes.map((route, index) =>
          <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
          />
          )}
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)