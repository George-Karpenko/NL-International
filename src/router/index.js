import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,

    },
    {
      path: "/category/:slug/",
      name: "category",
      component: () => import("@/views/CategoryView.vue"),
    },
    {
      path: "/category/:categorySlug/:subcategorySlug/",
      name: "subcategory",
      component: () => import("@/views/SubCategoryView.vue"),
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
