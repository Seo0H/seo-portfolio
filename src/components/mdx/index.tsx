/* eslint-disable react/prop-types */

import { ImageModal } from '@contents/components/main-image/img-modal';

import { RoundedBlock } from '@/components/common/block/inext';
import { A } from '@/components/mdx/a/a';
import { cn } from '@/utils/cn';

import { ToggleResult } from '../modal-img';

import { BlockQuote } from './blockquote';
import type { MDXComponents } from 'mdx/types';

const wrapper = /*tw*/ {
  darkMode:
    'dark:prose-headings:text-slate-300 dark:prose-strong:text-slate-300 dark:prose-invert dark:prose-p:text-slate-400 dark:prose-a:text-slate-400 dark:prose-a:decoration-slate-600 dark:prose-code:text-slate-300 dark:prose-ul:text-slate-400',
  print: 'print:prose-h3:m-[0.3rem_0] print:prose-li:my-1 print:prose-hr:my-6',
};

export const components = {
  wrapper({ components, ...props }) {
    return (
      <article
        className={`prose-m lg:prose-l print:prose-h2:-[0.3rem_0] prose
                    max-w-[inherit]
                    prose-p:break-keep prose-a:font-normal prose-a:decoration-slate-300 prose-ul:mb-1 prose-ul:mt-4 prose-ul:pl-4 prose-li:break-keep prose-hr:my-10 md:prose-ul:pl-6
                    ${wrapper.darkMode}
                    ${wrapper.print}
                    [&_*]:print:leading-[160%] `}
        {...props}
      />
    );
  },
  a: A,
  Captions(props) {
    return (
      <span
        className='text-sm font-light text-slate-400 [&_*]:text-slate-400 [&_ul]:m-0'
        {...props}
      />
    );
  },
  img({ className, alt, ...props }) {
    return (
      <div className='flex flex-col items-start justify-center gap-1'>
        <ToggleResult
          clickResult={<ImageModal src={props.src} />}
          className='cursor-pointer rounded-xl border border-slate-200 shadow-slate-100 transition-all hover:shadow-lg dark:border-slate-700 dark:bg-gradient-to-b dark:from-slate-200 dark:to-slate-500 dark:hover:bg-gradient-to-b dark:hover:to-slate-50 dark:hover:mix-blend-normal'
        >
          <img
            className={cn(
              `not-prose max-h-[300px] 
                dark:mix-blend-multiply print:max-h-[7cm] print:object-contain`,
              className,
            )}
            {...props}
          />
        </ToggleResult>
        <div className='text-[12px] text-slate-500 print:max-w-[15cm]'>{alt}</div>
      </div>
    );
  },
  Block({ className, ...props }) {
    return <RoundedBlock className={cn('0 px-10 [&>*:first-child]:mt-2', className)} {...props} />;
  },
  blockquote: BlockQuote,
} satisfies MDXComponents;
