import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      props: true,
      component: () =>
        import(/* webpackChunkName: "entry" */ "./pages/Questions"),
    },
    {
      path: "/overview",
      props: true,
      name: "overview",
      component: () =>
        import(/* webpackChunkName: "entry" */ "./pages/SuitabilityTest"),
    },
  ],
});

export default router;
