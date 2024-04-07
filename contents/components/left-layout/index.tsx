import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

const ContentsWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn(
      'border-slate-100 md:border-l-[2px] md:border-solid md:pl-5 print:border-none print:p-0 [&_*:first-child]:mt-2 [&_h4]:print:mt-3',
      className,
    )}
    {...props}
  />
);

const TitleWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div className={cn('break-keep md:*:m-0 [&>*]:sticky [&>*]:top-header', className)} {...props} />
);

export const LeftLayout = { ContentsWrapper, TitleWrapper };
