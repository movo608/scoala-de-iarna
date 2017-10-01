import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_CATEGORIES':
			let data = _.mapKeys(action.payload.data, 'id');
			state.categories = data;
			return { ...state };
		default: return state;
	}
}