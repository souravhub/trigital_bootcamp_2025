import { createApp } from "vue";
import App from "./App.vue";

import NewComponet from "@/components/NewComponet.vue";
import InputField from "./components/InputField.vue";
import CustomField from "./components/CustomField.vue";
const app = createApp(App);

app.component("NewComponet", NewComponet)
	.component("InputField", InputField)
	.component("CustomField", CustomField)
	.mount("#app");
