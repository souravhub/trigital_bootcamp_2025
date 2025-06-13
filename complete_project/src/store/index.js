import auth from "@/store/auth";
import todo from "@/store/todo";

import { createStore } from "vuex";

const store = createStore({
	modules: {
		auth,
		todo,
	},
});

export default store;
