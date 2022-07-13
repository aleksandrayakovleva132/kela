import { store } from '@/store';
// eslint-disable-next-line import/no-unresolved
import ru from 'locale/ru.json';
// eslint-disable-next-line import/no-unresolved
import en from 'locale/en.json';

const locales = {
  'ru-RU': ru,
  'en-US': en,
};

export default function localizeFilter(key) {
  const locale = store.getters.info.locale || 'ru-RU';
  return locales[locale][key] || `[Localize error]: key ${key} not found`;
}
