import { ComponentProps, useState } from 'react';

import { OGPreviewCard } from '@/components/og-preview';
import { debounce } from '@/utils/debounce';

export const A = (props: ComponentProps<'a'>) => {
  const [isHover, setIsHover] = useState(false);
  const isPreview = props.title === 'preview';

  const handleMouseEnter = debounce(() => setIsHover(true), 100);
  const handleMouseLeave = debounce(() => setIsHover(false), 100);

  return (
    <>
      {isHover && <OGPreviewCard url={props.href ?? ''} />}
      <a
        target='_blank'
        onMouseEnter={isPreview ? handleMouseEnter : undefined}
        onMouseLeave={isPreview ? handleMouseLeave : undefined}
        {...props}
      />
    </>
  );
};
