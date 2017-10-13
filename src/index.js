import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { Router, Switch } from 'react-router'
import { createHashHistory } from 'history'
import logger from 'redux-logger'

// import components
import LandingLayout from './layouts/LandingLayout.jsx'
import App from './containers/App'
import reducer from './reducers'
import Login from './containers/Login.jsx'
import Browse from './containers/Browse.jsx'
import Form from './containers/Form'
import CreateCategories from './containers/CreateCategories.js'
import CreatePosts from './containers/CreatePosts.js'
import CreateWorkshops from './containers/CreateWorkshops'
import ViewCategories from './containers/ViewCategories'
import ViewPosts from './containers/ViewPosts'
import ViewWorkshops from './containers/ViewWorkshops'
import ViewSubmissions from './containers/ViewSubmissions'
import Contributors from './containers/Contributors'
import Sponsors from './containers/Sponsors'

const middleware = applyMiddleware(thunkMiddleware);
const customHistory = createHashHistory();

const store = createStore (
    reducer,
    middleware,
    applyMiddleware(logger)
);

render(
  <Provider store={ store }>
      	<Router history={ customHistory }>
          	<div>
              	<Switch>
					<Route exact path='/' render={() => <LandingLayout><App /></LandingLayout>}/>
					<Route exact path='/form' render={() => <LandingLayout><Form /></LandingLayout>} />
					<Route exact path='/contributors' render={() => <LandingLayout><Contributors /></LandingLayout>} />
					<Route exact path='/sponsors' render={() => <LandingLayout><Sponsors /></LandingLayout>} />
					<Route exact path='/login' render={() => <LandingLayout><Login /></LandingLayout>}/>
              	  	<Route exact path='/browse' render={() => <LandingLayout><Browse /></LandingLayout>} />
            	  	<Route exact path='/create/category' render={() => <LandingLayout><CreateCategories /></LandingLayout>} />
					<Route exact path='/create/post' render={() => <LandingLayout><CreatePosts /></LandingLayout>} />
					<Route exact path='/create/workshops' render={() => <LandingLayout><CreateWorkshops /></LandingLayout>} />  
              	  	<Route exact path='/view/categories' render={() => <LandingLayout><ViewCategories /></LandingLayout>} />
					<Route exact path='/view/posts' render={() => <LandingLayout><ViewPosts /></LandingLayout>} /> 
					<Route exact path='/view/workshops' render={() => <LandingLayout><ViewWorkshops /></LandingLayout>} />
					<Route exact path='/view/submissions' render={() => <LandingLayout><ViewSubmissions /></LandingLayout>} />
              	</Switch>
          	</div>
      	</Router>
  </Provider>,
  document.getElementById('root')
);