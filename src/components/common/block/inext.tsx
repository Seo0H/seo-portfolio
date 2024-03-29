import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const RoundedBlock = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('rounded-block', 'rounded-lg bg-white px-6 py-1', className)} {...props}>
      {children}
    </div>
  );
};
