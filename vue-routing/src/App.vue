<script>
// $route
// $router
export default {
	data() {
		return {};
	},
	methods: {
		goToAbout() {
			// this.$router.push("/about");
			// this.$router.push({ path: "/about" });
			this.$router.push({ name: "About Page" });
		},
		goToHome() {
			// form submit
			// api call
			this.$router.push("/");
		},
		goToProfile() {
			// this.$router.push("/profile/info");
		},
		goToOrderList() {
			this.$router.push({ name: "Order List" });
		},
	},
	mounted() {},
};
</script>

<template>
	<h4>This is the starting point</h4>
	<RouterLink to="/about">Go to About</RouterLink><br />
	<RouterLink to="/">Go to Landing</RouterLink>
	<br />
	<RouterLink to="/khkjhsad">Break</RouterLink>
	<br />
	<hr />
	<button @click="goToAbout">About</button>
	<button @click="goToHome">Home</button>
	<button @click="goToProfile">Profile</button>
	<button @click="goToOrderList">My Orders</button>

	<br />
	<hr />
	<!-- navigate page render here -->
	<RouterView />
	<br />
	<hr />
	<p>this is my footer</p>
</template>

<style scoped>
a {
	color: blue;
	text-decoration: none;
}

.router-link-active {
	padding: 3px 4px;
	color: white;
	background: red;
}
button {
	margin: 0px 8px;
	cursor: pointer;
}
</style>
