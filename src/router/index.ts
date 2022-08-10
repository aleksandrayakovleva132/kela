import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/About/About.vue'),
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../components/Catalog/Catalog.vue'),
  },
  {
    path: '/catalog/:itemId(\\d+)',
    props: true,
    name: 'catalogItem',
    component: () => import('../components/Catalog/Catalog.vue'),
  },
  {
    path: '/project-item',
    name: 'ProjectItem',
    component: () => import('../components/ProjectItem/ProjectItem.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth',
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
