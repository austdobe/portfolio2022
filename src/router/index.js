import { createRouter, createWebHistory } from "vue-router";
import { routes } from './routes'

const url = import.meta.env.BASE_URL

const router = createRouter({
  history: createWebHistory(url),
  mode: 'history',
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
