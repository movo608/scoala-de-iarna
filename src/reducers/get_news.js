import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_NEWS':
			let data = _.mapKeys(action.payload.data.data, 'id');
			state.news = data;
			return { ...state };
		default: return state;
	}
}