import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_LOGGED_NAVBAR': 
			let data = _.mapKeys(action.payload.data, 'id');
			state.navbarLogged = data;
			return { ...state };
		default: return state;
	}
}