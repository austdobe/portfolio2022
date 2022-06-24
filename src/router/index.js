import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Landing",
      component: LandingView,
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/work",
      name: "Work",
      component: () => import("../views/WorkView.vue"),
    },
    {
      path: "/work/:redirect",
      props: route => ({redirectURL: `${route.params.redirect}`}),
      beforeEnter(redirectURL) {
        const params = redirectURL.params.redirect
        location.href = `http://austindober.com/${params}`
      },
    },
  ],
});

export default router;
