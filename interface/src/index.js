import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { Router, Switch } from 'react-router'
import { createHashHistory } from 'history'

import LandingLayout from './layouts/LandingLayout.jsx'
import App from './containers/App'
import reducer from './reducers'
import Login from './containers/Login.jsx'
import Browse from './containers/Browse.jsx'
import logger from 'redux-logger'

const middleware = applyMiddleware(thunkMiddleware);
const customHistory = createHashHistory();

const store = createStore(
    reducer,
    middleware,
    applyMiddleware(logger)
);

render(
  <Provider store = { store }>
      <Router history={ customHistory }>
          <div>
              <Switch>
                  <Route exact path='/' render={() => <LandingLayout><App /></LandingLayout>}/>
                  <Route exact path='/login' render={() => <LandingLayout><Login /></LandingLayout>}/>
                  <Route exact path='/browse' render={() => <LandingLayout><Browse /></LandingLayout>} />
              </Switch>
          </div>
      </Router>
  </Provider>,
  document.getElementById('root')
)
