import {
  Context,
  createMapper,
  Module,
} from 'vuex-smart-module';

import RootState from '@/store/root/RootState';
import RootMutations from '@/store/root/RootMutations';
import RootGetters from './RootGetters';
import RootActions from './RootActions';

// Create a module with module asset classes
export const rootModule = new Module({
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
});

export const rootMappers = createMapper(rootModule);

export type RootModule = Module<
RootState,
RootGetters,
RootMutations,
RootActions
>;

export type RootContext = Context<RootModule>;
