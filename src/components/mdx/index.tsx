/* eslint-disable react/prop-types */
import { A } from '@/components/mdx/a/a';
import { cn } from '@/utils/cn';

import { ImgGallery } from './img-gallery';
import type { MDXComponents } from 'mdx/types';

export const components: MDXComponents = {
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
        'border-slate-100 pl-3 md:border-l-[5px] md:border-solid md:[&>*:first-child]:m-0',
        className,
      )}
      {...props}
    />
  ),
  ImgGallery,
};
