import { Actions } from 'vuex-smart-module';
import RootState from '@/store/root/RootState';
import RootMutations from '@/store/root/RootMutations';
import RootGetters from './RootGetters';

export default class RootActions extends Actions<
RootState,
RootGetters,
RootMutations,
// eslint-disable-next-line no-use-before-define
RootActions
> {
}
