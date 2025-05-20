<template>
	<input
		:type="type"
		name=""
		:id="id"
		:placeholder="placeholder"
		:value="modelValue"
		@input="onInput"
	/>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			default: new Date().toString(),
		},
		type: {
			type: String,
			default: "text",
		},
		placeholder: {
			type: String,
			default: "Enter Your Name",
		},
		modelValue: {},
	},
	emits: ["update:modelValue"],
	methods: {
		onInput(event) {
			// console.log(event.target.value);
			this.$emit("update:modelValue", event.target.value);
		},
	},
};
</script>
