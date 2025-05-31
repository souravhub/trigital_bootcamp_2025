<template>
	<div>
		<ul>
			<li>
				<RouterLink to="/profile/info">User Info</RouterLink>
			</li>
			<li>
				<RouterLink to="/profile/orderlist">Order List</RouterLink>
			</li>
			<li>
				<RouterLink to="/profile/address">View Address</RouterLink>
			</li>
		</ul>
	</div>
	<div>
		<RouterView />
	</div>
</template>

<style scoped>
div {
	padding: 20px;
	background-color: #f0f0f0;
	border-radius: 8px;
	width: 200px;
	display: inline-block;
}

.router-link-active {
	padding: 3px 4px;
	color: white;
	background: red;
}
</style>
