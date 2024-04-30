import { ImageModal } from '@contents/components/main-image/img-modal';

import { ToggleResult } from '@/components/modal/img';
import { cn } from '@/utils/cn';

import * as style from '../style';

import type { ImageGalleryProps } from '../types';

export const DesktopImageGallery = ({
  contents,
  uniqId,
  gridStyle,
}: ImageGalleryProps & { gridStyle?: string }) => {
  return (
    <div className={cn('hidden min-h-[600px] grid-cols-3 gap-1 md:grid print:hidden', gridStyle)}>
      {contents?.map(({ isPrint, caption, className, ...props }, idx) => {
        return (
          <ToggleResult
            key={`${uniqId}-image-gallery-${idx}`}
            className={cn(style.toggleResultLayout, 'min-h-[208px]', className)}
            clickResult={<ImageModal {...{ caption }} {...props} />}
          >
            <span className={style.caption}>{caption?.heading}</span>
            <img
              className={cn(
                `not-prose absolute left-0 top-0
                    h-full w-full object-cover object-top
                    group-hover:mix-blend-multiply dark:mix-blend-multiply`,
                className,
              )}
              {...props}
            />
          </ToggleResult>
        );
      })}
    </div>
  );
};
