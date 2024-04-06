import React, { useLayoutEffect, useState } from 'react';

export const useImgSlider = <ContentsType>(
  outerContainerRef: React.RefObject<HTMLDivElement>,
  imagesWrapperRef: React.RefObject<HTMLDivElement>,
  contents: ContentsType[],
) => {
  const [activeImageIdx, setImageIdx] = useState(0);
  const [innerWidth, setInnerWidth] = useState(100);

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

  return { onNext: nextImageHandler, onPrev: prevImageHandler, activeIdx: activeImageIdx };
};
