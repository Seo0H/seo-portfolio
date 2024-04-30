import { ComponentProps, useLayoutEffect, useState } from 'react';

import { Icon } from '@/asset';
import { type ThemeValues, storageData } from '@/constant/stoarge';

export const ToggleDarkMode = (props: Omit<ComponentProps<'button'>, 'onClick'>) => {
  const { THEME } = storageData;
  const [curTheme, setCurTheme] = useState<ThemeValues | null>(
    localStorage.getItem(THEME.KEY) as ThemeValues | null,
  );

  useLayoutEffect(() => {
    const isStorageThemeDark = localStorage.theme === THEME.DARK;
    const isEmptyThemeDataInLocalStorage = !(THEME.KEY in localStorage);
    const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (isStorageThemeDark || (isEmptyThemeDataInLocalStorage && isSystemThemeDark)) {
      document.body.classList.add(THEME.DARK);
    } else {
      document.body.classList.remove(THEME.DARK);
    }
  }, []);

  const handleToggleDarkMode = () => {
    if (document.body.classList.contains(THEME.DARK)) {
      localStorage.setItem(THEME.KEY, THEME.LIGHT);
      setCurTheme(THEME.LIGHT);
    } else {
      localStorage.setItem(THEME.KEY, THEME.DARK);
      setCurTheme(THEME.DARK);
    }

    document.body.classList.toggle(THEME.DARK);
  };

  return (
    <button {...props} onClick={handleToggleDarkMode}>
      {curTheme === 'light' ? <Icon.Sun /> : <Icon.Moon />}
    </button>
  );
};
