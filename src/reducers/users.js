import { 
	USER_LOGIN, 
	USER_LOGOUT, 
	USER_STORE_LOGIN 
} from '../constants/ActionTypes'

const initialState = {
    isLoggedIn: false,
    message: '',
    userId: -1,
    username: ''
};

export default function users(state = initialState, action) {
	switch (action.type) {
	    case USER_LOGIN:
			return Object.assign({}, state, response(state, action));
		case USER_STORE_LOGIN:
			return Object.assign({}, state, storeResponse(state, action));
	    case USER_LOGOUT:
			return Object.assign({}, state, logout());
	    default:
	      	return state;
	}

	function response(state, action) {
		if (action.payload.data.status) {
			state.isLoggedIn = true;
			state.message = action.payload.data.data;
			state.userId = action.payload.data.userId;
			state.username = action.payload.data.username;
		} else {
			alert(action.payload.data.data);
		}
		return state;
	}

	function storeResponse(state, action) {
		if (action.payload.data.status) {
			state.isLoggedIn = true;
			state.message = action.payload.data.data;
			state.userId = action.payload.data.userId;
			state.username = action.payload.data.username;
		} else {
			alert(action.payload.data.data);
		}
		return state;
	}

	function logout() {
		state.isLoggedIn = false;
		state.message = '';
		state.userId = -1;
		return state;
	}
}
