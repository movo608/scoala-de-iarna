export default function (state = { sendForm: { status: false, data: 'no_request' } }, action) {
	switch (action.type) {
		case 'SEND_FORM':
			state.sendForm = action.payload.data;
			return { ...state };
		default: return state;
	}
}