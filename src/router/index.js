import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Stations",
        component: () =>
            import ("../views/Stations.vue"),
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: () =>
            import ("../views/Favorites.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;