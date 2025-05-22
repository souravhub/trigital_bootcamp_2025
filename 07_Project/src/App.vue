<template>
	<h2>Slots</h2>
	<FirstComponent title="My Tittle" />
	<hr />
	<Icon icon="mdi:home" />
	<hr />
	<MyButton>
		Save
		<template v-slot:post><Icon icon="mdi:plus" /></template>
	</MyButton>
	<hr />
	<MyButton>
		Search
		<template #[dynamicSlot]><Icon icon="mdi:search" /></template>
	</MyButton>
	<hr />
	{{ dynamicSlot }}
	<hr />
	<button @click="changeSlot">Normal Button</button>
</template>

<script>
import FirstComponent from "@/components/FirstComponent.vue";
import MyButton from "@/components/MyButton.vue";
import { Icon } from "@iconify/vue";
export default {
	components: {
		FirstComponent,
		MyButton,
		Icon,
	},
	data() {
		return {
			dynamicSlot: "pre",
		};
	},
	methods: {
		changeSlot() {
			if (this.dynamicSlot == "pre") {
				this.dynamicSlot = "post";
			} else {
				this.dynamicSlot = "pre";
			}
		},
	},
};
</script>

<style scoped></style>
