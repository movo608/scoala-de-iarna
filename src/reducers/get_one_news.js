import _ from 'lodash'

export default function (state = {}, action) {
	switch (action.type) {
		case 'GET_ONE_NEWS':
			state.id = action.payload.data.data.id;
			state.title = action.payload.data.data.title;
			state.body = action.payload.data.data.body;
			state.image = action.payload.data.data.image_url;
			return { ...state };
		default: return state;
	}
}