import type { ComponentProps } from 'react';

import { useDropdownContext } from '@/components/dropdown/context';
import { cn } from '@/utils/cn';

export const Trigger = ({ children, className, ...props }: ComponentProps<'button'>) => {
  const dropdown = useDropdownContext();

  return (
    <button onClick={dropdown?.handleTrigger} className={cn('w-full', className)} {...props}>
      {children}
    </button>
  );
};
