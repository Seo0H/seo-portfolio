import { useState } from 'react';

import { Icon } from '@/asset';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';
import { debounce } from '@/utils/debounce';

import { SettingContents } from './contents';

export const ToggleGlobalSetting = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className='relative h-full content-center'>
      <button className={cn(buttons.default, 'block h-full')} onClick={handleToggle}>
        <Icon.Cog />
      </button>

      {toggle && (
        <div
          className={cn(buttons.toggleBg, 'mt-2 flex w-[200px] flex-col gap-2 px-4 py-2')}
          onMouseLeave={debounce(() => setToggle(false), 1000)}
        >
          <GlobalSettingMenus />
        </div>
      )}
    </div>
  );
};

export const GlobalSettingMenus = () =>
  SettingContents.map((content) => (
    <div
      key={`${content.visible}-setting-menu`}
      className='flex w-full flex-row items-center justify-between font-light text-slate-500 dark:text-slate-400'
    >
      {content.visible}

      <content.button
        className={cn(
          buttons.default,
          'dark:bg-700 border border-slate-100 bg-slate-100 stroke-[2px] px-5 text-slate-500 dark:border-slate-700 dark:bg-slate-600 dark:text-slate-400 dark:hover:bg-slate-700',
        )}
      />
    </div>
  ));
