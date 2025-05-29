import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import landingPage from "./pages/landingPage.vue";
import about from "./pages/about.vue";
import notFound from "./pages/notFound.vue";

const routes = [
	{ path: "/", name: "Home Page", component: landingPage },
	{ path: "/about", name: "About Page", component: about },
	// catch all undefined paths or routes
	{
		path: "/:pathMatch(.*)*",
		component: notFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
