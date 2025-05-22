<template>First Component {{ title }}</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "Default Tittle",
		},
	},
};
</script>
