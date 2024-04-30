import { ComponentProps } from 'react';

import { useNavigate } from 'react-router-dom';

import { Logo } from '@/asset/logo/isSeo';
import { cn } from '@/utils/cn';

import { MobileHeader } from './mobile';
import { PCHeader } from './pc';

export const Header = ({ className }: Pick<ComponentProps<'div'>, 'className'>) => {
  const navigator = useNavigate();

  return (
    <div className={cn('fixed z-10 h-header w-full print:hidden', className)}>
      <div
        className={`mx-auto flex h-full w-full max-w-global-inner-width items-center justify-between gap-2 border-b-[1px] border-solid border-slate-900/10
                  bg-white bg-opacity-[0.8] px-4 bg-blend-overlay backdrop-blur-sm md:px-10
                  dark:border-slate-300/10 dark:bg-slate-900 dark:bg-opacity-[0.7]`}
      >
        <Logo
          width='min(20%, 100px)'
          height='100%'
          className='cursor-pointe'
          onClick={() => navigator('/info')}
        />

        <PCHeader className='hidden items-center justify-center sm:flex' />
        <MobileHeader className='px-1 sm:hidden' />
      </div>
    </div>
  );
};
