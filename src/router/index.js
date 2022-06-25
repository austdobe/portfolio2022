import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "Landing",
      component: LandingView,
      meta: {
        hideNavbar: true,
      }
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
      path: "/work/wagsWithFriends",
      beforeEnter() {
        location.href = `https://project2-10-2019.herokuapp.com/`
      },
    },
    {
      path: "/work/:redirect",
      props: route => ({redirectURL: `${route.params.redirect}`}),
      beforeEnter(redirectURL) {
        const params = redirectURL.params.redirect
        location.href = `http://austindober.com/${params}`
      },
    },
    {
      path: "/resume",
      name: "Resume",
      component: () => import("../views/ResumeView.vue"),
    },
    {
      path: "/404",
      component: () => import('../views/404.vue')
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

export default router;
