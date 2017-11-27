import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_SPONSORS':
			let data = _.mapKeys(action.payload.data.data, 'id');
			state.sponsors = data;
			return { ...state };
		default: return state;
	}
}