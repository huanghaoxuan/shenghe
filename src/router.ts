import Vue from "vue";
import Router from "vue-router";
import Menu from "@/components/views/menu.vue";
import News from "@/components/pages/news.vue";
import Apply from "@/components/pages/apply.vue";
import Download from "@/components/pages/download.vue";
import Index from "@/components/pages/index.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "menu",
      component: Menu,
      redirect: "/index",
      children: [
        {
          path: "/news",
          name: "news",
          component: News
        },
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/apply",
          name: "apply",
          component: Apply
        },
        {
          path: "/download",
          name: "download",
          component: Download
        }
      ]
    }
  ]
});
