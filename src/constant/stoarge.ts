enum THEME {
  KEY = 'theme',
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeValues = `${Exclude<THEME, 'theme'>}`;

export const storageData = { THEME };
