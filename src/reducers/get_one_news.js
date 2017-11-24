import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_ONE_NEWS':
			let data = _.mapKeys(action.payload.data, 'id');
			state.news_one = data;
			return { ...state };
		default: return state;
	}
}