export default function (state = {}, action) {
	switch (action.type) {
		case 'CREATE_CATEGORY':
			state.createCategory = action.payload;
			return { ...state };
		default: return state;
	}
}