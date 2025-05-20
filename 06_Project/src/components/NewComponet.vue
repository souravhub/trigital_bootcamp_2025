<template>
	<h3>This is my new component</h3>
	<h4>{{ title }}</h4>
	<button @click="$emit('makeTitle', 'Sourav')">Clikc Me</button>
</template>

<script>
export default {
	props: {
		title: String,
	},
	emits: ["makeTitle"],
	methods: {
		changeTitle() {
			this.$emit("makeTitle", "Sourav");
		},
	},
};
</script>
