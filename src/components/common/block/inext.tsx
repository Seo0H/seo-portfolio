import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const RoundedBlock = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'rounded-block',
        'rounded-lg border border-gray-200 bg-gray-100 px-6 py-3',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};