import { ComponentProps, useLayoutEffect } from 'react';

import { storageData } from '@/constant/stoarge';

export const ToggleDarkMode = (props: Omit<ComponentProps<'button'>, 'onClick'>) => {
  const { THEME } = storageData;

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
    } else {
      localStorage.setItem(THEME.KEY, THEME.DARK);
    }

    document.body.classList.toggle(THEME.DARK);
  };

  return <button {...props} onClick={handleToggleDarkMode} />;
};
