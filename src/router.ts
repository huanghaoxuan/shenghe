import Vue from "vue";
import Router from "vue-router";
import Menu from "@/components/views/menu.vue";
import News from "@/components/pages/news.vue";
import Status from "@/components/pages/status/status.vue";
import Download from "@/components/pages/download.vue";
import Index from "@/components/pages/index.vue";
import Apply from "@/components/pages/apply.vue";
import Update from "@/components/pages/update.vue";

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
          path: "/apply",
          name: "apply",
          component: Apply
        },
        {
          path: "/update",
          name: "update",
          component: Update
        },
        {
          path: "/index",
          name: "index",
          component: Index
        },
        {
          path: "/status",
          name: "status",
          component: Status
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
