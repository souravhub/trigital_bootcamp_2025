<script>
// v-on ===> @
// v-bind ===> :
export default {
	data() {
		return {
			message: "Hello Vue 3!",
			name: "",
			placeholderText: "Enter Your password",
			fieldType: "password",
			task: {
				name: "Learning Vue",
				isDone: false,
			},
		};
	},
	methods: {
		handleClick() {
			this.fieldType = this.fieldType === "password" ? "text" : "password";
		},
	},
	computed: {
		taskStatus() {
			return this.task.isDone ? "Completed" : "Pending";
		},
	},
};
</script>

<template>
	<h1>3rd Day</h1>
	<button @click="handleClick" style="display: block; margin-bottom: 10px">
		Click Me
	</button>
	<input :type="fieldType" :placeholder="placeholderText" v-model="name" />
	<p>Your name: {{ name }}</p>
	<pre>{{ task }}</pre>
	<div class="task">
		<p>Task Name: {{ task.name }}</p>
		<!-- { completed: task.isDone, pending: !task.isDone } -->
		<!-- :class="task.isDone ? 'completed' : 'pending'" -->
		<p>
			Staus:
			<span :class="{ completed: task.isDone, pending: !task.isDone }">{{
				taskStatus
			}}</span>
		</p>
		<input type="checkbox" v-model="task.isDone" />
	</div>
</template>

<style scoped>
.task {
	display: flex;
	gap: 30px;
	align-items: center;
	padding: 5px;
	border: 1px solid #ccc;
	margin-top: 10px;
}
.pending {
	color: red;
}
.completed {
	color: green;
}
</style>
