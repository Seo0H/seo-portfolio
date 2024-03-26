import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { useDropdownContext } from './context';

export const List = ({ className, ...props }: ComponentProps<'div'>) => {
  const dropdown = useDropdownContext();
  return (
    dropdown?.triggerOpen && (
      <div className={cn('absolute flex w-full flex-col', className)} {...props} />
    )
  );
};
