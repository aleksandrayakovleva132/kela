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
    path: '/catalog/civil',
    name: 'civil',
    component: () => import('../components/Catalog/Civil.vue'),
  },
  {
    path: '/catalog/civil/:itemId(\\d+)',
    props: true,
    name: 'civilItem',
    component: () => import('../components/Catalog/Civil.vue'),
  },
  {
    path: '/catalog/industry',
    name: 'industry',
    component: () => import('../components/Catalog/Industry.vue'),
  },
  {
    path: '/catalog/industry/:itemId(\\d+)',
    props: true,
    name: 'industryItem',
    component: () => import('../components/Catalog/Industry.vue'),
  },
  {
    path: '/catalog/bim',
    name: 'bim',
    component: () => import('../components/Catalog/Bim.vue'),
  },
  {
    path: '/catalog/bim/:itemId(\\d+)',
    props: true,
    name: 'bimItem',
    component: () => import('../components/Catalog/Bim.vue'),
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
