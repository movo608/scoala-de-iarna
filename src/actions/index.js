import { 
	USER_LOGIN,
 	USER_LOGOUT,
 	GET_LOGGED_NAVBAR
 } from '../constants/ActionTypes'

 import axios from 'axios';

// set default URL for API
const ROOT_URL = 'http://127.0.0.1/scoala-de-iarna/api/web/';

/**
 * Sends the login credentials to the reducers
 */
export function userLogin(email, password) {
	return {
		type: USER_LOGIN,
		email: email,
		password: password
	};
}

/**
 * Sends the logout request to the dispatcher
 */
export function userLogout() {
	return (dispatch) => { dispatch(dispatchUserLogout()) };
}

/**
 * Dispatches login request to the reducers
 */
function dispatchUserLogout() {
	return {
		type: USER_LOGOUT
	};
}

/**
 * Gets the navbar buttons, when the user is logged in.
 */
export function getLoggedNavbar() {
	return (dispatch) => {
		axios.get(`${ROOT_URL}api/get-logged-navbar`)
			.then((data) => { dispatch(dispatchLoggedNavbar(data)) });
	}
}

function dispatchLoggedNavbar(data) {
	return {
		type: GET_LOGGED_NAVBAR,
		payload: data
	}
}