import { useLayoutEffect, useRef, useState } from 'react';

import { ImageModal } from '@contents/components/main-image/img-modal';

import { ToggleResult } from '@/components/modal-img';
import { cn } from '@/utils/cn';

import style from '../style';
import { ImageGalleryProps } from '../types';

// TODO: 핸들러 로직 분리
export function MobileImageGallery({ contents, uniqId }: ImageGalleryProps) {
  const [activeImageIdx, setImageIdx] = useState(0);
  const [innerWidth, setInnerWidth] = useState(100);

  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const outerContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    adjustImageWidth();
    window.addEventListener('resize', adjustImageWidth);
    return () => window.removeEventListener('resize', adjustImageWidth);
  }, []);

  const adjustImageWidth = () => {
    if (!outerContainerRef.current || !imagesWrapperRef.current) return;
    const { width: containerWidth } = outerContainerRef.current.getBoundingClientRect();
    setInnerWidth(containerWidth);

    // TODO: resize 시 imagesWrapperRef 시작 위치가 조정되지 않는 현상 임시 보정 장치. resize 시 시작 위치 보정하도록 수정
    imagesWrapperRef.current.style.transform = `translateX(0px)`;
    setImageIdx(0);
  };

  const nextImageHandler = () => {
    if (!imagesWrapperRef.current || activeImageIdx >= contents.length - 1) return;

    imagesWrapperRef.current.style.transition = 'all 0.4s ease-in-out';
    imagesWrapperRef.current.style.transform = `translateX(${-innerWidth * (activeImageIdx + 1)}px)`;
    setImageIdx(activeImageIdx + 1);
  };

  const prevImageHandler = () => {
    if (!imagesWrapperRef.current || !outerContainerRef.current || activeImageIdx === 0) return;

    const { left: imgWrapperLeft } = imagesWrapperRef.current.getBoundingClientRect();
    const { left: outerLeftPadding } = outerContainerRef.current.getBoundingClientRect();
    const adjustedCurrentLeftPosition = imgWrapperLeft - outerLeftPadding;

    imagesWrapperRef.current.style.transition = 'all 0.4s ease-in-out';
    imagesWrapperRef.current.style.transform = `translateX(${adjustedCurrentLeftPosition + innerWidth}px)`;
    setImageIdx(activeImageIdx - 1);
  };

  return (
    <div className='relative h-[50vh] w-full overflow-hidden md:hidden' ref={outerContainerRef}>
      <div className='absolute flex h-full w-full cursor-pointer items-center justify-between'>
        <button onClick={prevImageHandler} className='z-10'>
          prev
        </button>
        <button onClick={nextImageHandler} className='z-10'>
          next
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
