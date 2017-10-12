import { combineReducers } from 'redux'

// import reducer files
import users from './users'
import loggedNavbar from './logged_navbar'
import getCategories from './get_categories'
import getPosts from './get_posts'
import submitForm from './submit_form'
import getWorkshops from './get_workshops'

const rootReducer = combineReducers({
	users,
  	loggedNavbar,
  	getCategories,
	getPosts,
	submitForm,
	getWorkshops
});

export default rootReducer;