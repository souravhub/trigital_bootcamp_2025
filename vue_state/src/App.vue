<script>
import RedComponent from "./components/RedComponent.vue";
import { mapState } from "vuex";
export default {
	data() {
		return {
			name: "Sourav",
			localCount: 0,
		};
	},
	components: {
		RedComponent,
	},
	computed: {
		...mapState({
			count: (state) => state.count,
			message: (state) => state.message,
		}),
	},

	methods: {
		changeLocalData() {
			// this.localCount++;
			// example of Mutation
			// this.$store.state.count = this.$store.state.count + 2; // BAD Practice
			// this.$store.commit("changeStateData", 10);
			// this.$store.commit("changeMsg", "Hello Ashwini!!");

			// example of Action
			this.$store.dispatch("initIncrement", 5);
		},
	},
};
</script>

<template>
	<h2>State Management</h2>
	<!-- <h4>Count: {{ $store.state.count }}</h4> -->
	<h4>Local Count: {{ localCount }}</h4>
	<h4>Count: {{ count }}</h4>
	<button @click="changeLocalData">Click me</button>
	<h4>{{ message }}</h4>
	<RedComponent />
</template>

<style scoped></style>
