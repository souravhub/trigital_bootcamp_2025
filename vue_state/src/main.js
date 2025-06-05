import { createApp } from "vue";

import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			count: 0,
			message: "Hello Vuex!",
		};
	},
	// API Calls
	actions: {
		initIncrement(context, payload) {
			// calling api and getting response
			context.commit("changeStateData", payload);
		},
	},
	mutations: {
		changeStateData(state, payload) {
			state.count = state.count + payload;
		},
		changeMsg(state, payload) {
			state.message = payload;
		},
	},
});

import App from "./App.vue";

createApp(App).use(store).mount("#app");
