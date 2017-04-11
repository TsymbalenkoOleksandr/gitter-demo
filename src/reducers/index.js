const initialState = {
      clientId: '0bd40a26127fb1b1c8962de515d6c83aa536ff18',
      redirectUri: 'http://127.0.0.1:8005',
      clientSecret: '25045a0e3c4a9997a7072b873b845b80a2e0b31c',
      grantType: 'authorization_code',
      isAuth: false
}

export default function rootReducer(state = initialState, action) {
	switch(action.type) {
		case 'setCode': 
		return Object.assign({}, state, action.payload )
		case 'failCode':
		return Object.assign({}, state, action.payload )
		default:
		return state
	}
}