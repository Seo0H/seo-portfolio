import { useRef, useState } from 'react';

interface UseImgSliderProps<ContentsType> {
  visibleWidth: number;
  contents: ContentsType[];
}

export const useHorizonSlider = <ContentsType>({
  visibleWidth,
  contents,
}: UseImgSliderProps<ContentsType>) => {
  const [activeImageIdx, setImageIdx] = useState(0);
  const [xPosition, setXPosition] = useState(0);
  const imagesWrapperRef = useRef<HTMLDivElement>(null);

  if (imagesWrapperRef.current) {
    imagesWrapperRef.current.style.transition = 'all 0.4s ease-in-out';
    imagesWrapperRef.current.style.transform = `translateX(${xPosition}px)`;
  }

  const nextImageHandler = () => {
    if (!imagesWrapperRef.current || activeImageIdx >= contents.length - 1) return;
    setXPosition(-visibleWidth * (activeImageIdx + 1));
    setImageIdx(activeImageIdx + 1);
  };

  const prevImageHandler = () => {
    if (!imagesWrapperRef.current || activeImageIdx === 0) return;
    setXPosition((prev) => prev + visibleWidth);
    setImageIdx(activeImageIdx - 1);
  };

  const reset = () => {
    setImageIdx(0);
    setXPosition(0);
  };

  return {
    ref: imagesWrapperRef,
    onNext: nextImageHandler,
    onPrev: prevImageHandler,
    reset,
    activeIdx: activeImageIdx,
  };
};
