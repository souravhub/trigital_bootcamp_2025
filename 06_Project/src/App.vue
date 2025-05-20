<script>
export default {
	data() {
		return {
			titleVar: "its a title",
			myName: "Sourav",
			searchText: "searching",
			myJob: "Developer",
		};
	},
};
</script>

<template>
	<h3>Register component</h3>
	<NewComponet
		:title="titleVar"
		@makeTitle="
			(value) => {
				titleVar = value;
			}
		"
	/>
	<br style="margin-bottom: 20px" />
	<!-- Detailed Mechanism -->
	<InputField
		type="text"
		:model-value="myName"
		@update:model-value="(newValue) => (myName = newValue)"
	/>
	<!-- Easy to read -->
	<CustomField v-model="myJob" />
	<!-- <input v-model="searchText" /> -->
</template>

<style scoped></style>
