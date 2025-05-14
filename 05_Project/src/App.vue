<script>
import task from "@/components/task.vue";
export default {
	components: {
		task,
	},
	data() {
		return {
			titleVar: "Learn Vue3",
			taskStatus: false,
		};
	},
	methods: {
		updateTaskStatus() {
			this.taskStatus = !this.taskStatus;
		},
	},
	computed: {},
};
</script>

<template>
	<h2>Learn about components</h2>
	<pre>{{ taskStatus }}</pre>
	<task
		:title="titleVar"
		desc="All theories"
		:isDone="taskStatus"
		@changeTaskStatus="updateTaskStatus"
	></task>
	<task title="Learn CSS" desc="All properties"></task>
</template>

<style scoped></style>
