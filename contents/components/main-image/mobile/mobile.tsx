import { useRef } from 'react';

import { ImageModal } from '@contents/components/main-image/img-modal';

import * as Icon from '@/asset/icon';
import { ToggleResult } from '@/components/modal-img';
import { cn } from '@/utils/cn';

import { ImageGalleryProps } from '../types';

import { style } from './style';
import { useImgSlider } from './use-image-slider';

export function MobileImageGallery({ contents, uniqId }: ImageGalleryProps) {
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);
  const { onNext, onPrev } = useImgSlider(outerContainerRef, imagesWrapperRef, contents);

  return (
    <div className='relative h-[50vh] w-full overflow-hidden md:hidden' ref={outerContainerRef}>
      <div className='absolute flex h-full w-full cursor-pointer items-center justify-between'>
        <button onClick={onPrev} className='z-10'>
          <Icon.Arrow.Left className={style.icon} />
        </button>
        <button onClick={onNext} className='z-10'>
          <Icon.Arrow.Right className={style.icon} />
        </button>
      </div>

      <div className='absolute flex' ref={imagesWrapperRef}>
        {contents?.map(({ isPrint, className, caption, ...props }, idx) => {
          return (
            <ToggleResult
              key={`${uniqId}-image-gallery-${idx}`}
              className={cn(
                style.toggleResultLayout,
                'max-h-[50vh] w-[100vw] bg-slate-100',
                className,
              )}
              clickResult={<ImageModal {...{ caption }} {...props} />}
              style={{ width: `${innerWidth}px` }}
            >
              <span className='absolute z-10 hidden px-5 pb-3 font-semibold leading-snug text-white group-hover:block'>
                {caption?.heading}
              </span>
              <img
                className={`not-prose h-full w-full object-scale-down group-hover:mix-blend-multiply `}
                {...props}
              />
            </ToggleResult>
          );
        })}
      </div>
    </div>
  );
}
