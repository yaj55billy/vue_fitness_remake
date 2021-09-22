import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/Index.vue";
import Home from "../views/front/Home.vue";
import About from "../views/front/About.vue";
import Qa from "../views/front/Qa.vue";
import Contact from "../views/front/Contact.vue";
import Products from "../views/front/Products.vue";
import Error from "../views/Error.vue";

const routes = [
  {
    path: "/",
    component: Index,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
      {
        path: "qa",
        name: "Qa",
        component: Qa,
      },
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "products",
        name: "Products",
        component: Products,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
