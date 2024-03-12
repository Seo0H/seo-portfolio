import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const ImgGallery = ({ children, className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('grid min-h-[600px] w-full grid-cols-3 gap-6', className)}>{children}</div>
  );
};

const Item = ({ className, ...props }: ComponentProps<'img'>) => {
  const handleClick = () => {};

  return (
    <div
      className={cn(
        'relative flex min-h-[208px] w-full cursor-pointer flex-col justify-end overflow-hidden',
        className,
      )}
      onClick={handleClick}
    >
      <img className='absolute left-0 top-0 h-full w-full object-cover object-top' {...props} />
    </div>
  );
};

ImgGallery.Item = Item;
