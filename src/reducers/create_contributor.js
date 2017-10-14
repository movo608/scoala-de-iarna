export default function (state = { contributorCreated: { status: false, data: 'no_request' } }, action) {
	switch (action.type) {
		case 'CREATE_CONTRIBUTOR':
			state.contributorCreated = action.payload.data;
			return { ...state };
		default: return state;
	}
}