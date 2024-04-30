import { ComponentProps } from 'react';

import { Markdown } from '@/components/mdx/utils/markdown-parer';
import { ModalBG } from '@/components/modal/bg';
import { cn } from '@/utils/cn';

import styles from './style/scroll-bar.module.css';
import type { Caption } from './types';

export const ImageModal = ({
  onClick,
  className,
  caption,
  ...props
}: ComponentProps<'img'> & { caption?: Caption }) => {
  return (
    <ModalBG onClick={onClick}>
      <div className='absolute top-0 z-10 flex h-full w-full items-center justify-center'>
        <div className='flex max-h-[70vh] max-w-[70vw] flex-col rounded-lg border border-gray-400 bg-gray-800 bg-opacity-30 p-3 pb-5 text-white backdrop-blur-sm'>
          <div className={styles['scroll-bar']}>
            <img className={cn('h-full w-full object-contain', className)} {...props} />
          </div>

          <div className='mt-3'>
            <h2 className='text-xl font-bold leading-relaxed'>{caption?.heading}</h2>
            <p className='break-words break-keep text-sm font-light [&_a]:underline'>
              <Markdown>{caption?.descriptions}</Markdown>
            </p>
          </div>
        </div>
      </div>
    </ModalBG>
  );
};
