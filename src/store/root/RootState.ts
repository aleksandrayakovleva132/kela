// eslint-disable-next-line import/extensions
import DeviceLayout from '@/utils/DeviceLayout.ts';

// eslint-disable-next-line import/extensions
import DeviceMeta from '@/utils/DeviceMeta.ts';
// eslint-disable-next-line import/extensions
import DeviceOs from '@/utils/DeviceOs.ts';
// eslint-disable-next-line import/extensions
import DeviceBrowser from '@/utils/DeviceBrowser.ts';
// eslint-disable-next-line import/extensions
import MenuStatus from '@/store/enums/MenuStatus.ts';
// eslint-disable-next-line import/extensions
import Local from '@/store/enums/Local.ts';

export default class RootState {
  menu: MenuStatus = MenuStatus.IS_HIDDEN;

  local: Local = Local.RU;

  layout: DeviceLayout = DeviceMeta.getLayout();

  os: DeviceOs = DeviceMeta.getOs();

  browser: DeviceBrowser = DeviceMeta.getBrowser();
}
