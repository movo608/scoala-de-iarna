import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_SUBMISSIONS':
			let data = _.mapKeys(action.payload.data, 'id');
			state.submissions = data;
			return { ...state };
		default: return state;
	}
}