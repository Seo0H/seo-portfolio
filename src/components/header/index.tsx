import { ComponentProps, useId } from 'react';

import { Link } from 'react-router-dom';

import { projectKeys } from '@/pages/project';
import { cn } from '@/utils/cn';

export const Header = ({ className }: Pick<ComponentProps<'div'>, 'className'>) => {
  const uniqId = useId();

  return (
    <div
      className={cn(
        'fixed z-10 w-full bg-gray-100 bg-opacity-[0.8] bg-blend-overlay backdrop-blur-sm ',
        className,
      )}
    >
      <div className='max-w-global-inner-width mx-auto flex h-header w-full items-center gap-4 border-b-2 border-solid'>
        <button onClick={window.print}>PDF 저장</button>
        <Link to='/info'>INFO</Link>

        {projectKeys.map((key) => (
          <Link to={`/project/${key}`} key={`${key}-${uniqId}`}>
            PROJECT : {key.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};
