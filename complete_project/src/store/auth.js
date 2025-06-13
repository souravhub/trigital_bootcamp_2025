export default {
	state: () => ({
		userInfo: null,
	}),
	getters: {
		isLoggedIn(state) {
			state.userInfo ? true : false;
		},
	},
	actions: {
		login(context, payload) {
			context.commit("SET_USER", payload);
		},
	},
	mutations: {
		SET_USER(state, payload) {
			state.userInfo = payload;
		},
	},
};
