import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const BlockQuote = ({ className, children }: ComponentProps<'blockquote'>) => {
  return (
    <div
      className={cn(
        `mb-2 w-full rounded-xl border border-slate-100 bg-gradient-to-br from-slate-100 px-4 py-3
        prose-blockquote:border-none
        dark:border-slate-800 dark:from-slate-800
        print:break-inside-avoid print:border-none print:from-transparent print:p-0 print:pb-4 [&_*:last-child]:mb-0 [&_p]:my-2
        [&_ul]:m-0 print:[&_ul]:mt-2 `,
        className,
      )}
    >
      {children}
    </div>
  );
};
