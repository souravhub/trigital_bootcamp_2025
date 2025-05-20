<template>
	<input
		:type="type"
		name=""
		:id="id"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
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
};
</script>
