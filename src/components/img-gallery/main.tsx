import { ComponentProps, useState } from 'react';

import { ImageModal } from '@/components/img-gallery/img-moal';
import { cn } from '@/utils/cn';

export const ImgGallery = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return <div className={cn('grid min-h-[600px] grid-cols-3 gap-1', className)}>{children}</div>;
};

export type Caption = { heading: string; descriptions?: string };

const Item = ({ className, caption, ...props }: ComponentProps<'img'> & { caption?: Caption }) => {
  const [isModalShown, setModalShown] = useState(false);

  const handleClick = () => {
    setModalShown(!isModalShown);
  };

  return (
    <>
      {isModalShown && <ImageModal {...{ caption }} {...props} onClick={handleClick} />}

      <div
        className={cn(
          `
          group relative flex min-h-[208px] w-full cursor-pointer flex-col justify-end overflow-hidden
          rounded-lg border border-solid border-gray-200
          hover:bg-gradient-to-t hover:from-gray-500 hover:mix-blend-multiply
          `,
          className,
        )}
        onClick={handleClick}
      >
        <span className='z-10 hidden px-5 pb-3 font-semibold leading-snug text-white group-hover:block'>
          {caption?.heading}
        </span>
        <img
          className={`
            not-prose absolute left-0 top-0
            h-full w-full object-cover object-top
            group-hover:mix-blend-multiply
            `}
          {...props}
        />
      </div>
    </>
  );
};

ImgGallery.Item = Item;
