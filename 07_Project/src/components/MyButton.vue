<template>
	<button class="animated-button">
		<div class="main">
			<div class="pre">
				<slot name="pre">
					<!-- pre named slot content render here -->
				</slot>
			</div>
			<div class="label">
				<slot>
					<!-- without name or default slot content render here -->
				</slot>
			</div>
			<div class="post">
				<slot name="post">
					<!-- post named slot content render here -->
				</slot>
			</div>
		</div>
	</button>
</template>

<script>
export default {
	// props: {
	// 	label: String,
	// },
};
</script>

<style scoped>
.animated-button {
	background-color: #4caf50;
	color: white;
	padding: 12px 24px;
	font-size: 16px;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	transition: background-color 0.3s ease, transform 0.2s ease;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.animated-button:hover {
	background-color: #45a049;
	transform: scale(1.05);
}

.animated-button:active {
	transform: scale(0.98);
}
.main {
	display: flex;
	align-items: center;
	gap: 5px;
}
</style>
