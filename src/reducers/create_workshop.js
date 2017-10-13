export default function (state = { workShopCreated: { status: false, data: 'no_request' } }, action) {
	switch (action.type) {
		case 'CREATE_WORKSHOP':
			state.workShopCreated = action.payload.data;
			return { ...state };
		default: return state;
	}
}