import { combineReducers } from 'redux'

// import reducer files
import users from './users'
import loggedNavbar from './logged_navbar'
import getCategories from './get_categories'
import getPosts from './get_posts'

const rootReducer = combineReducers({
	users,
  	loggedNavbar,
  	getCategories,
  	getPosts
});

export default rootReducer;