<script>
export default {
	// Options API --Vue 2
	data() {
		return {
			message: "Hello World",
			isVisible: true,
			isChecking: true,
		};
	},
	methods: {
		handleClick(text) {
			this.isChecking = !this.isChecking;
			console.log(text);
		},
		toggle() {
			this.isVisible = !this.isVisible;
		},
		buttonHover() {
			this.message = "Button Hovered";
		},
	},
};
</script>

<template>
	<h1>{{ message }}</h1>
	<!-- <h1>{{ message1 }}</h1> -->
	<!-- @mouseover="buttonHover" -->
	<button
		type="button"
		@click="handleClick('Click me button')"
		style="margin-bottom: 20px"
	>
		Click Me
	</button>
	<!-- for debigging -->
	<pre>isVisible:{{ isVisible }}</pre>
	<!-- <pre>isChecking:{{ isChecking }}</pre> -->
	<p v-if="isVisible">Sourav</p>
	<!-- <p v-else-if="isChecking">Developer</p>
	<p v-else>Samanta</p> -->

	<p v-show="isVisible">V-show use</p>

	<button @click="toggle">ToggleView</button>
</template>

<style scoped>
button {
	padding: 10px 20px;
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	display: block;
}
</style>
