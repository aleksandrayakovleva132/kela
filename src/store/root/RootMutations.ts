import { Mutations } from 'vuex-smart-module';
// eslint-disable-next-line import/extensions
import MenuStatus from '@/store/enums/MenuStatus.ts';
import DeviceOs from '@/utils/DeviceOs';
import DeviceBrowser from '@/utils/DeviceBrowser';

import DeviceLayout from '@/utils/DeviceLayout';
import Local from '@/store/enums/Local';
import RootState from '@/store/root/RootState';

export default class RootMutations extends Mutations<RootState> {
  setMenu(menu: MenuStatus): void {
    this.state.menu = menu;
  }

  setLayout(layout: DeviceLayout): void {
    this.state.layout = layout;
  }

  setLocal(local: Local): void {
    this.state.local = local;
  }

  setOs(os: DeviceOs): void {
    this.state.os = os;
  }

  setBrowser(browser: DeviceBrowser): void {
    this.state.browser = browser;
  }
}
