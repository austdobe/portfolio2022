import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routes";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
  },
  routes,
});

export default router;
