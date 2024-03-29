/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useId } from 'react';

import { MainImageItemContents } from '@contents/project/components/main-image/types';

import { ImgGallery } from '@/components/img-gallery';
import { cn } from '@/utils/cn';

export const ProjectMainImage = ({
  contents,
  className,
}: {
  contents: MainImageItemContents[];
  className?: string;
}) => {
  const id = useId();

  return (
    <>
      <ImgGallery className={cn('print:hidden', className)}>
        {contents?.map(({ isPrint, ...el }, idx) => {
          return <ImgGallery.Item key={`${id}-ProjectMainImage-${idx}`} {...el} />;
        })}
      </ImgGallery>

      {/* print ver */}
      <div
        className={`not-prose max-h-mainImage hidden h-fit justify-center gap-1 overflow-hidden
                    rounded-md border border-gray-300 bg-gray-200 px-2 print:flex`}
      >
        <>
          {contents
            .filter((el) => el.isPrint)
            .map((el, idx) => {
              return (
                <div key={`${id}-ProjectMainImage-${idx}`}>
                  <img src={el.src} className='mx-auto h-full object-contain' />
                </div>
              );
            })}
        </>
      </div>
    </>
  );
};
