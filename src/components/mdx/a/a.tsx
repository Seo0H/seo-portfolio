import { ComponentProps } from 'react';

import { useOgPreview } from '@/components/mdx/a/hook';
import { OGPreviewCard } from '@/components/mdx/a/og-preview';

export const A = (props: ComponentProps<'a'>) => {
  const { openGraph, isShown: isHover, handleShowPreview } = useOgPreview(props);
  const handleHover = handleShowPreview('mouseenter');

  return (
    <>
      <OGPreviewCard {...{ isHover, openGraph }} />
      <a target='_blank' onMouseEnter={handleHover} onMouseLeave={handleHover} {...props} />
    </>
  );
};
