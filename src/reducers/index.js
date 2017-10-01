import { combineReducers } from 'redux'

// import reducer files
import users from './users'
import loggedNavbar from './logged_navbar'
import getCategories from './get_categories'
import createCategories from './create_categories'

const rootReducer = combineReducers({
	users,
  	loggedNavbar,
  	getCategories,
  	createCategories
});

export default rootReducer;