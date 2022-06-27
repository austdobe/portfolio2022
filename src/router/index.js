import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: function(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
  },
  routes
});

export default router;
