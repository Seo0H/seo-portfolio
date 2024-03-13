import { useId } from 'react';

import { ImgGallery } from '@contents/project/components/img-gallery';
import { MainImageItemContents } from '@contents/project/components/main-image/types';

import * as styles from './styles';

export const ProjectMainImage = ({ contents }: { contents: MainImageItemContents[] }) => {
  const id = useId();
  return (
    <ImgGallery className={styles.mainGridStyle}>
      {contents?.map((el, idx) => {
        return <ImgGallery.Item key={`${id}-ProjectMainImage-${idx}`} {...el} />;
      })}
    </ImgGallery>
  );
};
