import { USER_LOGIN, USER_LOGOUT} from '../constants/ActionTypes'

const user = {
	email: 'test@gmail.com',
	password: 'test'
};

const initialState = {
    isLoggedIn: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
		return Object.assign({}, state, response(state, action));
    case USER_LOGOUT:
		return Object.assign({}, state, logout());

    default:
      return state
	}

	function response(state, data){
		if(user.email === data.email && user.password === data.password){
			state.isLoggedIn = true;
		}
		return state;
	}

	function logout() {
		state.isLoggedIn = false;
		return state;
	}
}
