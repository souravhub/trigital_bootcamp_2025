<template>
	<div class="item-list">
		<h2>Item List</h2>
		<ul>
			<li
				v-for="item in items"
				:key="item.id"
				class="item"
				@click="toItemDetails(item)"
			>
				<strong>{{ item.name }}</strong> - ${{ item.price.toFixed(2) }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "LandingPage",
	data() {
		return {
			items: [
				{ id: 1, name: "Item One", price: 10.99, slug: "item-one" },
				{ id: 2, name: "Item Two", price: 5.49, slug: "item-two" },
				{ id: 3, name: "Item Three", price: 20.0, slug: "item-three" },
				{ id: 4, name: "Item Four", price: 7.75, slug: "item-four" },
				{ id: 5, name: "Item Five", price: 15.3, slug: "item-five" },
			],
		};
	},
	methods: {
		toItemDetails(item) {
			// Navigate to item details page with item ID
			this.$router.push(`/itemDetails/${item.id}/${item.slug}`);
		},
	},
};
</script>

<style scoped>
.item-list {
	max-width: 400px;
	margin: auto;
	font-family: sans-serif;
}
.item {
	padding: 8px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;
	margin: 5px 0px;
}
</style>
