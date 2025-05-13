<script>
export default {
	data() {
		return {
			taskList: [
				{
					title: "Learn Vue",
					desc: "Learning Loop rendering",
					isDone: false,
					_id: "a",
				},
				{
					title: "Learn CSS",
					desc: "Learning grid and display proerty",
					isDone: false,
					_id: "b",
				},
				{
					title: "Making Project",
					desc: "Making a to-do application",
					isDone: false,
					_id: "c",
				},
			],
			title: "",
			desc: "",
		};
	},
	methods: {
		deleteTask(taskId) {
			// filter
			this.taskList = this.taskList.filter((task) => task._id !== taskId);
		},
		addTask() {
			if (!this.title || !this.desc) {
				alert("Please enter title and description");
				return;
			}
			const task = {
				title: this.title,
				desc: this.desc,
				isDone: false,
			};

			this.taskList.unshift(task);
			this.title = "";
			this.desc = "";
		},
	},
};
</script>

<template>
	<div class="input-box">
		<input
			type="text"
			name=""
			id="task"
			placeholder="Enter Title"
			v-model="title"
		/>
		<textarea
			v-model="desc"
			placeholder="Enter task description"
			rows="5"
		></textarea>
		<button @click="addTask">Add</button>
	</div>
	<div class="main-div">
		<div v-for="task in taskList" class="task-box" :key="task._id">
			<h4>{{ task.title }}</h4>
			<p>{{ task.desc }}</p>
			<div class="staus">
				<p>{{ task.isDone ? "Completed" : "Pending" }}</p>
				<input type="checkbox" id="chk" v-model="task.isDone" />
				<button @click="deleteTask(task._id)">Delete</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.task-box {
	border: 1px solid black;
	padding: 8px;
	margin: 5px;
	border-radius: 7px;
	width: 300px;
}
.main-div {
	display: flex;
	flex-direction: column;
}
.staus {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
}
p,
h4 {
	margin: 5px 0px;
}
.input-box {
	display: flex;
	flex-direction: column;
	border: 1px solid black;
	gap: 10px;
	padding: 8px;
	width: 300px;
}

button {
	cursor: pointer;
}
</style>
px
