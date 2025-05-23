<script>
import RedComponet from "./components/RedComponet.vue";
import BlueComponent from "./components/BlueComponent.vue";

export default {
	components: {
		RedComponet,
		BlueComponent,
	},
	data() {
		return {
			isVisible: true,
		};
	},
};
</script>

<template>
	<button @click="isVisible = !isVisible">Show/Hide</button>
	<RedComponet v-if="isVisible" />
	<BlueComponent />
</template>

<style></style>
