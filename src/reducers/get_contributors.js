import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_CONTRIBUTORS':
			let data = _.mapKeys(action.payload.data, 'id');
			state.contributors = data;
			return { ...state };
		default: return state;
	}
}