import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
import PostDetailsPage from "../pages/PostDetailsPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "/post/:postId",
    name: "post-details",
    component: PostDetailsPage,
    beforeEnter: authGuard
  },
];

const router = new VueRouter({
  routes,
});

export default router;
