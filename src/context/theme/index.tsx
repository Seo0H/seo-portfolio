import { ReactNode, createContext, useContext, useEffect } from 'react';

import { ThemeValues, storageData } from '@/constant/stoarge';
import { useLocalStorage } from '@/hooks/localstorage';

const ThemeContext = createContext<
  | { theme: ThemeValues; setTheme: (theme: ThemeValues) => void; onToggleTheme: () => void }
  | undefined
>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { THEME } = storageData;
  const [theme, setTheme] = useLocalStorage<ThemeValues>(THEME.KEY, undefined);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handelTheme = (newTheme: ThemeValues) => {
    setTheme(newTheme);
  };

  const handelToggleTheme = () => {
    let newTheme: ThemeValues;

    if (theme === 'dark') newTheme = 'light';
    else newTheme = 'dark';

    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handelTheme, onToggleTheme: handelToggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useThemeContext는 ThemeContext 아레에서만 사용 가능 합니다.');
  }

  return theme;
};
