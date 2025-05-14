<template>
	<h4>{{ title }}</h4>
	<p>{{ desc }}</p>
	<input type="checkbox" :value="isDone" @input="onInput" />
</template>

<script>
export default {
	props: {
		title: {
			type: [String, Number, Object, null],
			default: "test",
		},
		desc: String,
		isDone: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["changeTaskStatus"],
	methods: {
		onInput() {
			this.$emit("changeTaskStatus");
			// Custom event
		},
	},
};
</script>

<style scoped></style>
