// import Vue from 'vue';
// import router from './router';
// import store from './store';
// import App from './App.vue';
//
// Vue.config.productionTip = false;

import Vue from 'vue';
// import VueMeta from 'vue-meta';
import { rootModule } from '@/store/root';
import App from './App.vue';
import router from './router';
import { store } from './store';

Vue.config.productionTip = false;
// Vue.use(VueMeta);

Vue.prototype.$menu = {
  get current() {
    return rootModule.context(store).state.menu;
  },
  set: rootModule.context(store).mutations.setMenu,
};

Vue.prototype.$local = {
  get current() {
    return rootModule.context(store).state.local;
  },
  set: rootModule.context(store).mutations.setLocal,
};

Vue.prototype.$layout = {
  get current() {
    return rootModule.context(store).state.layout;
  },
  set: rootModule.context(store).mutations.setLayout,
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
