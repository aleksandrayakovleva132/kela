import { Actions } from 'vuex-smart-module';
import RootState from './RootState';
import RootGetters from './RootGetters';
import RootMutations from './RootMutations';

export default class RootActions extends Actions<
RootState,
RootGetters,
RootMutations,
// eslint-disable-next-line no-use-before-define
RootActions
> {
}
