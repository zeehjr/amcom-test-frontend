import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import routes from './routes'

function App () {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Switch>
            {routes.map(route => (
              <Route
                key={`${route.path}-${route.exact}`}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App
