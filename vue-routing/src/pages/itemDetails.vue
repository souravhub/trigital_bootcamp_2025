<template>
	<h2>Name: {{ itemData.name }}</h2>
	<h3>Price: {{ itemData.price }}</h3>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{ id: 1, name: "Item One", price: 10.99, slug: "item-one" },
				{ id: 2, name: "Item Two", price: 5.49, slug: "item-two" },
				{ id: 3, name: "Item Three", price: 20.0, slug: "item-three" },
				{ id: 4, name: "Item Four", price: 7.75, slug: "item-four" },
				{ id: 5, name: "Item Five", price: 15.3, slug: "item-five" },
			],
			itemData: {},
		};
	},
	mounted() {
		// this.$route
		// this.$router
		// check this.$route by console.log
		console.log(this.$route.params, "$route");

		// so we can call the item details api here with // this.$route.params.itemsId
		this.itemData = this.items.find(
			(item) => item.id === parseInt(this.$route.params.itemsId)
		);
	},
};
</script>
