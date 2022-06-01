import {
  Context,
  createMapper,
  Module,
} from 'vuex-smart-module';

import RootState from './RootState';
import RootGetters from './RootGetters';
import RootMutations from './RootMutations';
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
