import { ComponentProps } from 'react';

import { Icon } from '@/asset';
import { useThemeContext } from '@/context/theme';

export const ToggleDarkMode = (props: Omit<ComponentProps<'button'>, 'onClick'>) => {
  const { theme, onToggleTheme } = useThemeContext();

  return (
    <button {...props} onClick={onToggleTheme}>
      {theme === 'light' ? <Icon.Sun /> : <Icon.Moon />}
    </button>
  );
};
