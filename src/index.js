import 'babel-polyfill'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store'
import Main from './containers/Main'
import Header from './components/Header'
import SideMenu from './components/SideMenu/'
import LoginPanel from './components/LoginPanel/'

const store = configureStore()

// const routes = [
//   {
//     path: '/',
//     main: Main,
//     exact: true
//   }
// ]

render(
  <Provider store={store}>
    <Router>
      <div>
      {console.log()}
          <Header />
          <Route
          path={'/'}
          exact={true}
          component={Main}
          />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)