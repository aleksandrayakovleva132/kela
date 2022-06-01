import { Mutations } from 'vuex-smart-module';
// eslint-disable-next-line import/extensions
import MenuStatus from '@/store/enums/MenuStatus.ts';
import DeviceOs from '@/utils/DeviceOs';
import DeviceBrowser from '@/utils/DeviceBrowser';

import DeviceLayout from '@/utils/DeviceLayout';
import RootState from './RootState';

export default class RootMutations extends Mutations<RootState> {
  setMenu(menu: MenuStatus): void {
    this.state.menu = menu;
  }

  setLayout(layout: DeviceLayout): void {
    this.state.layout = layout;
  }

  setOs(os: DeviceOs): void {
    this.state.os = os;
  }

  setBrowser(browser: DeviceBrowser): void {
    this.state.browser = browser;
  }
}
