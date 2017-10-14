export default function (state = { sponsorCreated: { status: false, data: 'no_request' } }, action) {
	switch (action.type) {
		case 'CREATE_SPONSOR':
			state.sponsorCreated = action.payload.data;
			return { ...state };
		default: return state;
	}
}