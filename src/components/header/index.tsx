import { ComponentProps, useId } from 'react';

import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { Logo } from '@/asset/logo/isSeo';
import { projectKeys } from '@/pages/project';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

export const Header = ({ className }: Pick<ComponentProps<'div'>, 'className'>) => {
  const uniqId = useId();
  const navigator = useNavigate();

  return (
    <div className={cn('fixed z-10 h-header w-full', 'print:hidden', className)}>
      <div className='mx-auto flex h-full w-full max-w-global-inner-width items-center justify-between gap-2 border-b-2 border-solid  bg-white bg-opacity-[0.8] px-4 bg-blend-overlay backdrop-blur-sm md:px-10'>
        <Logo className='size-20 cursor-pointer md:size-auto' onClick={() => navigator('/info')} />

        <div className='hidden md:block'>
          <Link to='/info'>INFO</Link>

          {/* TODO: 드롭다운으로 변경 */}
          {projectKeys.map((key) => (
            <Link to={`/project/${key}`} key={`${key}-${uniqId}`}>
              PROJECT : {key.toUpperCase()}
            </Link>
          ))}
          <button className={buttons.default} onClick={window.print}>
            PDF 저장
          </button>
        </div>

        <button className={cn(buttons.default, 'block md:hidden')}>햄버거</button>
      </div>
    </div>
  );
};

const Link = (props: ComponentProps<typeof RouterLink>) => (
  <RouterLink className={buttons.default} {...props} />
);
