import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const Col2 = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'grid grid-cols-[40%_auto] items-start gap-3 [&_img]:max-h-max print:[&_img]:max-h-[10cm]',
        className,
      )}
      {...props}
    />
  );
};
