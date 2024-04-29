import { ComponentProps } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Logo } from '@/asset/logo/isSeo';
import { Buttons } from '@/components/button/index';
import { ProjectDropdown } from '@/components/dropdown/project';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

export const Header = ({ className }: Pick<ComponentProps<'div'>, 'className'>) => {
  const navigator = useNavigate();

  return (
    <div className={cn('fixed z-10 h-header w-full print:hidden', className)}>
      <div className='mx-auto flex h-full w-full max-w-global-inner-width items-center justify-between gap-2 border-b-2 border-solid bg-white bg-opacity-[0.8] px-4 bg-blend-overlay backdrop-blur-sm md:px-10'>
        <Logo
          width='min(20%, 100px)'
          height='100%'
          className='cursor-pointer'
          onClick={() => navigator('/info')}
        />

        <div className='flex'>
          <Link to='/info' className={cn(buttons.default, 'hidden md:block')}>
            INFO
          </Link>
          <Buttons.DownloadPdf className={cn(buttons.default)}>PDF 저장</Buttons.DownloadPdf>

          <ProjectDropdown />
        </div>
      </div>
    </div>
  );
};
