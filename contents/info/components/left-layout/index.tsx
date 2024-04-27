import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

const ContentsWrapper = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn('md:pl-3 print:p-0 [&_*:first-child]:mt-0 [&_h4]:print:mt-3', className)}
    {...props}
  />
);

const TitleWrapper = ({ className, children, ...props }: ComponentProps<'div'>) => (
  <div className={cn('not-prose mx-auto break-keep md:w-full md:*:m-0', className)} {...props}>
    <hr className='mb-5 hidden print:block' />
    <div className="sticky top-[70px] mb-3 w-fit rounded-lg bg-slate-100 px-3 py-1 text-center font-bold md:w-full print:bg-white print:p-0 print:text-justify print:text-2xl print:[&>*]:before:content-['Skill_:_']">
      {children}
    </div>
  </div>
);

export const LeftLayout = { ContentsWrapper, TitleWrapper };
