import { createApp } from "vue";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";

import landingPage from "./pages/landingPage.vue";
import about from "./pages/about.vue";
import notFound from "./pages/notFound.vue";
import itemDetails from "./pages/itemDetails.vue";
import userInfo from "./pages/profile/userInfo.vue";
import oderlist from "./pages/profile/oderlist.vue";
import viewAddress from "./pages/profile/viewAddress.vue";
import profile from "./pages/profile.vue";

const routes = [
	{ path: "/", name: "Home Page", component: landingPage },
	{ path: "/about", name: "About Page", component: about },
	// {
	// 	path: "/itemDetails/:itemsId",
	// 	name: "Item Details",
	// 	component: itemDetails,
	// },
	{
		path: "/itemDetails/:itemsId/:itemSlug",
		name: "Item Details",
		component: itemDetails,
	},
	// example of child or nested routes
	{
		path: "/profile",
		component: profile,
		children: [
			{
				path: "info",
				component: userInfo,
			},
			{
				path: "address",
				component: viewAddress,
			},
			{
				path: "orderlist",
				name: "Order List",
				component: oderlist,
			},
		],
	},
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
