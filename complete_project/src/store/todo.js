export default {
	namespaced: true,
	state: () => ({
		todoList: [],
	}),
	actions: {
		addTodo(context, payload) {
			context.commit("SET_TODO", payload);
		},
	},
	mutations: {
		SET_TODO(state, payload) {
			state.todoList.push(payload);
		},
	},
	getters: {},
};
