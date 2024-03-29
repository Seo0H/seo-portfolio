import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const LeftContentsWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn(
      'border-slate-100 pl-5 md:border-l-[2px] md:border-solid print:p-0 [&_*:first-child]:mt-2 [&_h4]:print:mt-3',
      className,
    )}
    {...props}
  />
);

export const LeftTitleWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('break-keep md:*:m-0 [&>*]:sticky [&>*]:top-header', className)} {...props} />
);
