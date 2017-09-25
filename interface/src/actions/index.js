import { USER_LOGIN, USER_LOGOUT} from '../constants/ActionTypes'

export function userLogin(email, password) {
	return {
		type: USER_LOGIN,
		email: email,
		password: password
	};
}

export function userLogout() {
	return {
		type: USER_LOGOUT
	};
}