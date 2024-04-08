import { ComponentProps, useState } from 'react';

import { OGPreviewCard } from '@/components/og-preview';
import { debounce } from '@/utils/debounce';

export const A = (props: ComponentProps<'a'>) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = debounce(() => setIsHover(true));
  const handleMouseLeave = debounce(() => setIsHover(false));

  return (
    <>
      {isHover && <OGPreviewCard url={props.href ?? ''} />}
      <a
        target='_blank'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      />
    </>
  );
};
