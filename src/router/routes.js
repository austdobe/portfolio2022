export const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/LandingView.vue"),
    meta: {
      hideNavbar: true,
    },
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
      location.href = `https://project2-10-2019.herokuapp.com/`;
    },
  },
  {
    path: "/work/:redirect",
    props: (route) => ({ redirectURL: `${route.params.redirect}` }),
    beforeEnter(redirectURL) {
      const params = redirectURL.params.redirect;
      location.href = `http://austindober.com/${params}`;
    },
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/ResumeView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/ContactView.vue"),
    meta: {
      hideNavbar: true,
    },
  },
  {
    path: "/404",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "portfolio2022/",
  },
];
