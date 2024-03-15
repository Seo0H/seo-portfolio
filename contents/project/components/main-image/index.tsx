import { useId } from 'react';

import { ImgGallery } from '@/components/img-gallery';
import { MainImageItemContents } from '@contents/project/components/main-image/types';

export const ProjectMainImage = ({
  contents,
  className,
}: {
  contents: MainImageItemContents[];
  className?: string;
}) => {
  const id = useId();
  return (
    <ImgGallery className={className}>
      {contents?.map((el, idx) => {
        return <ImgGallery.Item key={`${id}-ProjectMainImage-${idx}`} {...el} />;
      })}
    </ImgGallery>
  );
};
