<script>
// vue 2
export default {
	name: "App",
	data() {
		return {
			title: "This is a variable we are using",
			arr: [1, 2, 3, 4, 5],
			obj: {
				name: "John",
			},
			firstName: "Peter",
			lastname: "Parker",
		};
	},
	computed: {
		fullName() {
			return this.firstName + " " + this.lastname;
		},
	},
};
</script>

<script setup>
// vue 3
import { ref, computed } from "vue";
const title2 = ref("This is a variable we are using");
const nVar = "Bootcamp";

const myText = computed(() => {
	return title2.value + " " + nVar;
});
</script>

<template>
	<h1 class="title">{{ obj.name }}</h1>
	<h2 class="title">{{ title2 }}</h2>
	<h2 class="title">{{ nVar }}</h2>
	<h2 class="title">{{ firstName }} {{ lastname }}</h2>
	<h2 class="title">{{ fullName }}</h2>
	<h2 class="title">{{ myText }}</h2>
</template>

<style scoped>
.title {
	color: red;
}
</style>
