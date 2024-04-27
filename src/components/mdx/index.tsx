/* eslint-disable react/prop-types */

import { ImageModal } from '@contents/components/main-image/img-modal';

import { RoundedBlock } from '@/components/common/block/inext';
import { A } from '@/components/mdx/a/a';
import { cn } from '@/utils/cn';

import { ToggleResult } from '../modal-img';

import type { MDXComponents } from 'mdx/types';

export const components = {
  wrapper({ components, ...props }) {
    return (
      <article
        className={`prose-m lg:prose-l print:prose-h2:-[0.3rem_0] prose
                    max-w-[inherit]
                    dark:prose-invert prose-p:break-keep prose-a:font-normal prose-a:decoration-slate-300 prose-ul:mb-1 prose-ul:mt-4 prose-ul:pl-4 prose-li:break-keep prose-hr:my-10 md:prose-ul:pl-6
                    print:prose-h3:m-[0.3rem_0] print:prose-li:my-1 print:prose-hr:my-6 [&_*]:print:leading-[160%]`}
        {...props}
      />
    );
  },
  a: A,
  Captions(props) {
    return <div className='font-light *:text-sm [&_*]:text-gray-500 [&_ul]:m-0' {...props} />;
  },
  img({ className, alt, ...props }) {
    return (
      <div className='flex flex-col items-start justify-center gap-1'>
        <ToggleResult clickResult={<ImageModal src={props.src} />} className='cursor-pointer '>
          <img
            className={cn(
              'not-prose max-h-[300px] rounded-xl border border-gray-200 shadow-gray-100 hover:shadow-lg print:max-h-[7cm] print:object-contain',
              className,
            )}
            {...props}
          />
        </ToggleResult>
        <div className='text-[12px] text-gray-500 print:max-w-[15cm]'>{alt}</div>
      </div>
    );
  },
  Block({ className, ...props }) {
    return <RoundedBlock className={cn('0 px-10 [&>*:first-child]:mt-2', className)} {...props} />;
  },
  blockquote({ className, children }) {
    return (
      <div
        className={cn(
          'mb-2 w-full rounded-xl border border-slate-100 bg-gradient-to-br from-slate-100  px-4 py-2 prose-blockquote:border-none print:break-inside-avoid print:border-none print:from-transparent print:p-0 print:pb-4 [&_p]:my-2 print:[&_ul]:mt-2',
          className,
        )}
      >
        {children}
      </div>
    );
  },
} satisfies MDXComponents;
