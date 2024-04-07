/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useId } from 'react';

import { MainImageItemContents } from '@contents/components/main-image/types';

import { MobileImageGallery } from './mobile';
import { DesktopImageGallery } from './pc';

export const ProjectMainImage = ({
  contents,
  gridStyle,
}: {
  contents: MainImageItemContents[];
  gridStyle?: string;
}) => {
  const id = useId();

  return (
    <>
      <DesktopImageGallery {...{ contents, uniqId: id, gridStyle }} />

      {/* mobile ver */}
      <MobileImageGallery {...{ contents, uniqId: id }} />

      {/* print ver */}
      <div
        className={`not-prose hidden h-fit max-h-mainImage justify-center gap-1 overflow-hidden
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
