/* eslint-disable react/prop-types */

import { RoundedBlock } from '@/components/common/block/inext';
import { A } from '@/components/mdx/a/a';
import { cn } from '@/utils/cn';

import type { MDXComponents } from 'mdx/types';

export const components = {
  wrapper({ components, ...props }) {
    return (
      <article
        className='prose-m lg:prose-l prose max-w-[inherit] dark:prose-invert prose-p:break-keep prose-li:break-keep prose-hr:my-10'
        {...props}
      />
    );
  },
  a: A,
  Captions(props) {
    return <div className='*:text-sm' {...props} />;
  },
  LeftTitleWrapper: ({ className, ...props }) => (
    <div className={cn('break-keep md:*:m-0', className)} {...props} />
  ),
  LeftContentsWrapper: ({ className, ...props }) => (
    <div
      className={cn(
        'border-slate-200 pl-3 md:border-l-[5px] md:border-solid md:[&>*:first-child]:m-0',
        className,
      )}
      {...props}
    />
  ),
  Block({ className, ...props }) {
    return <RoundedBlock className={cn('0 px-10 [&>*:first-child]:mt-2', className)} {...props} />;
  },
} satisfies MDXComponents;

export type MDXProvidedComponents = typeof components;
