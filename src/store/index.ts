import Vue from 'vue';
import Vuex from 'vuex';
import {
  createStore,
  Module,
} from 'vuex-smart-module';
import { rootModule } from '@/store/root';

Vue.use(Vuex);

const root = new Module({
  modules: {
    rootModule,
  },
});

// The 1st argument is root module.
// Vuex store options should be passed to the 2nd argument.
// eslint-disable-next-line import/prefer-default-export
export const store = createStore(root, {
  strict: process.env.NODE_ENV !== 'production',
});
