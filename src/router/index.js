import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import OrderDetails from "../views/OrderDetails.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/order/:id",
    name: "OrderDetails",
    props: true,
    component: OrderDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
