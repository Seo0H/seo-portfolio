import { Buttons } from '@/components/button';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

import { ProjectMenu } from '../project-menu';
import { GlobalSettingMenus } from '../setting';

export const MobileHeader = ({ className }: { className: string }) => {
  return (
    <Buttons.EllipsisMenu
      className={cn(buttons.default, className)}
      menu={
        <div className='mt-2 flex flex-col items-start'>
          <div className='font-medium text-slate-500 dark:text-slate-300'>Projects</div>
          <hr className='my-2 w-full border-slate-200 dark:border-slate-600' />
          <ProjectMenu />
          <hr className='my-2 w-full border-slate-200 dark:border-slate-600' />
          <div className='flex w-full flex-col justify-between gap-2'>
            <GlobalSettingMenus />
          </div>
        </div>
      }
    />
  );
};
