import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_POSTS':
			let data = _.mapKeys(action.payload.data, 'id');
			state.posts = data;
			return { ...state };
		default: return state;
	}
}