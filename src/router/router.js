import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import PostsPage from "@/pages/PostsPage";
import PostsPageVuex from "@/pages/PostsPageVuex";
import PostsPageCompositionApi from "@/pages/PostsPageCompositionApi";
import PostItemPage from "@/pages/PostItemPage";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/posts-with-vuex",
    component: PostsPageVuex,
  },
  {
    path: "/posts-with-composition-api",
    component: PostsPageCompositionApi,
  },
  {
    path: "/posts/:id",
    component: PostItemPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
