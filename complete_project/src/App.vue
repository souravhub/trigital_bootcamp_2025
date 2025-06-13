<template>
	<div>
		<h1>Welcome to My Vue App</h1>
		<h4>This is a simple Vue.js application.</h4>
		<hr />
		<div v-for="todo in todoList" :key="todo.id">
			<h3>{{ todo.title }}</h3>
			<p>{{ todo.desc }}</p>
		</div>
		<hr />
		<button @click="submitTodo">Add Todo</button>
		<hr />
		<button @click="handleLogin">Login</button>
	</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
	data() {
		return {
			fname: "Sourav",
			lname: "Samanta",
		};
	},
	computed: {
		...mapState({
			todoList: (state) => state.todo.todoList,
		}),
		...mapGetters({
			isLoggedIn: "auth/isLoggedIn",
		}),
		fullName() {
			return `${this.fname} ${this.lname}`;
		},
	},
	methods: {
		submitTodo() {
			this.$store.dispatch("todo/addTodo", {
				id: Date.now(),
				title: "New Todo",
				desc: "This is a new todo item.",
			});
		},
		handleLogin() {
			this.$store.dispatch("auth/login", {
				username: "user",
				password: "password",
			});
		},
	},
};
</script>

<style scoped></style>
