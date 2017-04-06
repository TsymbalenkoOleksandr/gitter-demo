import 'babel-polyfill'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import App from './containers/App'
import Main from './containers/Main'
import First from './containers/First'

const store = configureStore()

const routes = [
  {
    path: '/',
    main: Main,
    exact: true
  },
  {
    path: '/app',
    main: App
  },
  {
    path: '/first',
    main: First
  }
]

render(
  <Provider store={store}>
    <Router>
      <div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/app'>Bubblegum</Link></li>
          <li><Link to='/first'>Shoelaces</Link></li>
        </ul>
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