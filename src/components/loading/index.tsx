import { useLayoutEffect, useRef } from 'react';

import animate from '@/styles/animation.module.css';
import { cn } from '@/utils/cn';

export const MainSkeleton = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    return () => {
      ref.current?.classList.add(animate['fade-out']);
    };
  });

  return (
    <div className={cn('h-full w-full animate-pulse', animate['fade-in'])} ref={ref}>
      <div className='mb-1 h-7 w-1/4 rounded-md bg-gray-200' />
      <div className=' h-12 w-2/4 rounded-md bg-gray-200' />

      <div className='my-10 min-h-[30vh] w-full rounded-md bg-gray-200' />

      <div className='my-4 h-10 w-1/3 rounded-md bg-gray-200' />

      {Array.from({ length: 30 }).map((el, idx) => {
        let width = Math.random() * 600;
        if (width < 200) width = 200;

        return (
          <div
            key={`skeleton-${idx}`}
            className='mb-1 mr-3 mt-2 inline-block h-[1rem] rounded-md bg-gray-200'
            style={{ width: `${width}px` }}
          />
        );
      })}
    </div>
  );
};
