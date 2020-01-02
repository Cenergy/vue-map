import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Home from "components/HelloWorld.vue";

const router = new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      component:Home
    },
  ]
});
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
