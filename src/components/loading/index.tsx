import { useLayoutEffect, useRef } from 'react';

import animate from '@/styles/animation.module.css';
import { cn } from '@/utils/cn';

const style = /*tw*/ `rounded-md bg-gray-200 dark:bg-slate-700`;

export const MainSkeleton = () => {
  const ref = useRef<HTMLDivElement>(null);
  const minWidth = Math.floor(window.innerWidth / 5);

  useLayoutEffect(() => {
    return () => {
      ref.current?.classList.add(animate['fade-out']);
    };
  });

  return (
    <div
      className={cn(
        'h-full w-full max-w-[100vw] animate-pulse overflow-hidden',
        animate['fade-in'],
      )}
      ref={ref}
    >
      <div className={cn('mb-1 h-7 w-1/4', style)} />
      <div className={cn(' h-12 w-2/4', style)} />

      <div className={cn('my-10 min-h-[30vh] w-full', style)} />

      <div className={cn('my-4 h-10 w-1/3', style)} />

      {Array.from({ length: 30 }).map((_, idx) => {
        let width = Math.random() * 600;

        if (width < minWidth) width = minWidth;
        else if (width > window.innerWidth)
          width = Math.floor(window.innerWidth - Math.random() * 100);

        return (
          <div
            key={`skeleton-${idx}`}
            className={cn('mb-1 mr-3 mt-2 inline-block h-[1rem]', style)}
            style={{ width: `${width}px` }}
          />
        );
      })}
    </div>
  );
};
