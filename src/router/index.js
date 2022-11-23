import { createRouter, createWebHistory } from "vue-router";
import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/category/:slug/",
      name: "category",
      component: () => import("@/views/CategoryView.vue"),
      props: true,
    },
    {
      path: "/category/:categorySlug/:subcategorySlug/",
      name: "subcategory",
      component: () => import("@/views/SubCategoryView.vue"),
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "PageNotExist",
      component: () => import("@/views/Error404View.vue"),
      meta: {
        layout: "error",
      },
    },
  ],
});

router.beforeEach(loadLayoutMiddleware);

export default router;
