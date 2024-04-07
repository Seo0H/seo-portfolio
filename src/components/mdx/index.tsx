/* eslint-disable react/prop-types */

import { RoundedBlock } from '@/components/common/block/inext';
import { A } from '@/components/mdx/a/a';
import { cn } from '@/utils/cn';

import type { MDXComponents } from 'mdx/types';

export const components = {
  wrapper({ components, ...props }) {
    return (
      <article
        className={`prose-m lg:prose-l print:prose-h2:-[0.3rem_0] prose
                    max-w-[inherit]
                    dark:prose-invert prose-p:break-keep prose-a:decoration-slate-300 prose-code:font-bold prose-ul:pl-4 prose-li:break-keep prose-hr:my-10 md:prose-ul:pl-6
                    print:prose-h3:m-[0.3rem_0] print:prose-li:my-1 print:prose-hr:my-6 [&_*]:print:leading-[160%]`}
        {...props}
      />
    );
  },
  a: A,
  Captions(props) {
    return <div className='font-light *:text-sm [&_li]:print:m-0' {...props} />;
  },
  img({ className, ...props }) {
    return <img className={cn('print:m-0 print:h-[200px]', className)} {...props} />;
  },
  Block({ className, ...props }) {
    return <RoundedBlock className={cn('0 px-10 [&>*:first-child]:mt-2', className)} {...props} />;
  },
} satisfies MDXComponents;
