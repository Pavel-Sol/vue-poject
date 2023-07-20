import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import About from "@/pages/About";
import PostsPage from "@/pages/PostsPage";
import PostsPageVuex from "@/pages/PostsPageVuex";
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
    path: "/posts/:id",
    component: PostItemPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
// process.env.BASE_URL
