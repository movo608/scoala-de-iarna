import { combineReducers } from 'redux'
import users from './users'
import loggedNavbar from './logged_navbar'

const rootReducer = combineReducers({
  users,
  loggedNavbar
});

export default rootReducer;