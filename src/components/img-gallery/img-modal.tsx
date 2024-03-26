import { ComponentProps } from 'react';

import { Portal } from '@/components/common/portal';
import { Caption } from '@/components/img-gallery/main';
import { Markdown } from '@/components/mdx/utils/markdown-parer';
import { cn } from '@/utils/cn';

export const ImageModal = ({
  onClick,
  className,
  caption,
  ...props
}: ComponentProps<'img'> & { caption?: Caption }) => {
  return (
    <Portal>
      <div
        className='fixed left-0 top-0 z-20 h-full max-h-full w-full overflow-hidden'
        {...{ onClick }}
      >
        <div className='absolute top-0 z-10 flex h-full w-full items-center justify-center'>
          <div className='flex h-[60vh] w-[50ch] flex-col justify-around rounded-xl border border-gray-400 bg-gray-800 bg-opacity-30 p-3 text-white backdrop-blur-sm'>
            <div className='max-h-[80%] overflow-hidden rounded-md bg-slate-800'>
              <img className={cn('h-full w-full object-contain py-2', className)} {...props} />
            </div>
            <div>
              <h2 className='text-xl font-bold'>{caption?.heading}</h2>
              <p className='break-words break-keep text-sm font-light [&_a]:underline'>
                <Markdown>{caption?.descriptions}</Markdown>
              </p>
            </div>
          </div>
        </div>
        <div className='z-10 h-full bg-slate-800 bg-opacity-60 ' />
      </div>
    </Portal>
  );
};
