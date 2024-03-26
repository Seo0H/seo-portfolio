import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const LeftContentsWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn(
      'border-slate-100 pl-5 md:border-l-[2px] md:border-solid md:[&>*:first-child]:m-0',
      className,
    )}
    {...props}
  />
);

export const LeftTitleWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('[&>*]:top-header break-keep md:*:m-0 [&>*]:sticky', className)} {...props} />
);
