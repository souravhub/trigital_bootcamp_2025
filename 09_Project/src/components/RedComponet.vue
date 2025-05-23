<template>
	<div class="red">
		<h2>Red Component</h2>
		<h3>Price: {{ itemPrice }}</h3>
	</div>
</template>

<script>
export default {
	data() {
		return {
			itemPrice: 0,
		};
	},
	computed: {},
	methods: {
		//
	},
	beforeCreate() {
		console.log(
			`Red :: beforeCreate:: the component is about to be created.`,
			this.itemPrice
		);
	},
	created() {
		console.log(`Red :: created:: the component is created.`, this.itemPrice);
	},
	beforeMount() {
		console.log(
			`Red :: beforeMount:: the component is about to be mounted.`,
			this.itemPrice
		);
	},
	mounted() {
		// for example, we can call the product details API here
		this.itemPrice = 100;
		console.log(
			`Red :: mounted:: the component is now mounted.`,
			this.itemPrice
		);
	},
	beforeUpdate() {
		console.log(
			`Red :: beforeUpdate :: the component is about to be updated.`,
			this.itemPrice
		);
	},
	updated() {
		console.log(`Red :: updated :: the component is updated.`, this.itemPrice);
	},
	beforeUnmount() {
		console.log(
			`Red :: beforeUnmount :: the component is about to be unmounted.`,
			this.itemPrice
		);
	},
	unmounted() {
		console.log(
			`Red :: unmounted :: the component is unmounted.`,
			this.itemPrice
		);
	},
};
</script>

<style>
.red {
	border: 2px solid red;
	padding: 20px;
	margin: 5px;
}
</style>
