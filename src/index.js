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
import Login from './containers/Login'
import Browse from './containers/Browse'
import Form from './containers/Form'
import CreateCategories from './containers/CreateCategories'
import CreatePosts from './containers/CreatePosts'
import CreateWorkshops from './containers/CreateWorkshops'
import ViewCategories from './containers/ViewCategories'
import ViewPosts from './containers/ViewPosts'
import ViewWorkshops from './containers/ViewWorkshops'
import ViewSubmissions from './containers/ViewSubmissions'
import Contributors from './containers/Contributors'
import Sponsors from './containers/Sponsors'
import CreateContributor from './containers/CreateContributor'
import ViewContributors from './containers/ViewContributors'
import CreateSponsor from './containers/CreateSponsor'
import ViewSponsors from './containers/ViewSponsors'
import About from './containers/About'
import Camps from './containers/Camps'
import Sdi2016 from './containers/Sdi2016'
import Sdi2017 from './containers/Sdi2017'
import Sdv2014 from './containers/Sdv2014'
import Sdv2015 from './containers/Sdv2015'
import Sdv2016 from './containers/Sdv2016'
import Sdv2017 from './containers/Sdv2017'

const middleware = applyMiddleware(thunkMiddleware);
const customHistory = createHashHistory();

const store = createStore (
    reducer,
    middleware,
    applyMiddleware(logger)
);

render(
  <Provider store={ store }>
      	<Router history={ customHistory } >
          	<div>
              	<Switch>
					<Route exact path='/' render={() => <LandingLayout><App /></LandingLayout>}/>
					<Route exact path='/form' render={() => <LandingLayout><Form /></LandingLayout>} />
					<Route exact path='/contributors' render={() => <LandingLayout><Contributors /></LandingLayout>} />
					<Route exact path='/sponsors' render={() => <LandingLayout><Sponsors /></LandingLayout>} />
					<Route exact path='/about' render={() => <LandingLayout><About /></LandingLayout>} />
					<Route exact path='/schools' render={() => <LandingLayout><Camps /></LandingLayout>} />

					<Route exact path='/schools/sdv/2014' render={() => <LandingLayout><Sdv2014 /></LandingLayout>} />
					<Route exact path='/schools/sdv/2015' render={() => <LandingLayout><Sdv2015 /></LandingLayout>} />
					<Route exact path='/schools/sdv/2016' render={() => <LandingLayout><Sdv2016 /></LandingLayout>} />
					<Route exact path='/schools/sdv/2017' render={() => <LandingLayout><Sdv2017 /></LandingLayout>} />

					<Route exact path='/schools/sdi/2016' render={() => <LandingLayout><Sdi2016 /></LandingLayout>} />
					<Route exact path='/schools/sdi/2017' render={() => <LandingLayout><Sdi2017 /></LandingLayout>} />

					<Route exact path='/login' render={() => <LandingLayout><Login /></LandingLayout>} />
					<Route exact path='/admin' render={() => <LandingLayout><Browse /></LandingLayout>} />
							  
					<Route exact path='/create/category' render={() => <LandingLayout><CreateCategories /></LandingLayout>} />
					<Route exact path='/create/contributor' render={() => <LandingLayout><CreateContributor /></LandingLayout>} />
					<Route exact path='/create/post' render={() => <LandingLayout><CreatePosts /></LandingLayout>} />
					<Route exact path='/create/workshop' render={() => <LandingLayout><CreateWorkshops /></LandingLayout>} /> 
					<Route exact path='/create/sponsor' render={() => <LandingLayout><CreateSponsor /></LandingLayout>} />  

              	  	<Route exact path='/view/categories' render={() => <LandingLayout><ViewCategories /></LandingLayout>} />
					<Route exact path='/view/posts' render={() => <LandingLayout><ViewPosts /></LandingLayout>} /> 
					<Route exact path='/view/workshops' render={() => <LandingLayout><ViewWorkshops /></LandingLayout>} />
					<Route exact path='/view/submissions' render={() => <LandingLayout><ViewSubmissions /></LandingLayout>} />
					<Route exact path='/view/contributors' render={() => <LandingLayout><ViewContributors /></LandingLayout>} />
					<Route exact path='/view/sponsors' render={() => <LandingLayout><ViewSponsors /></LandingLayout>} />
              	</Switch>
          	</div>
      	</Router>
  </Provider>,
  document.getElementById('root')
);