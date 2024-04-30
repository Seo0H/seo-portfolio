import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

import { useDropdownContext } from './context';

export const List = ({ className, ...props }: ComponentProps<'div'>) => {
  const { handleOpen, handleClose, options, triggerOpen } = useDropdownContext();
  return (
    triggerOpen && (
      <div
        className={cn('absolute flex flex-col', className)}
        onMouseMove={options?.hover ? handleOpen : undefined}
        onMouseLeave={options?.hover ? handleClose : undefined}
        {...props}
      />
    )
  );
};
