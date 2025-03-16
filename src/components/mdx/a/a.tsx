import { ComponentProps } from 'react';

import ReactGA from 'react-ga4';

// import { OGPreviewCard } from '@/components/og-preview';
// import { debounce } from '@/utils/debounce';

export const A = (
  props: Omit<ComponentProps<'a'>, 'onMouseEnter' | 'onMouseLeave' | 'onClick'>,
) => {
  // const [isHover, setIsHover] = useState(false);
  // const isPreview = props.title === 'preview';

  // const handleMouseEnter = debounce(() => setIsHover(true), 100);
  // const handleMouseLeave = debounce(() => setIsHover(false), 100);
  const handleClick = () => {
    ReactGA.event({
      category: 'MDX Link',
      action: 'Click',
      label: props.href,
      value: 100,
    });
  };

  return (
    <>
      {/* {isHover && <OGPreviewCard url={props.href ?? ''} />} */}
      <a
        target='_blank'
        // onMouseEnter={isPreview ? handleMouseEnter : undefined}
        // onMouseLeave={isPreview ? handleMouseLeave : undefined}
        onClick={handleClick}
        {...props}
      />
    </>
  );
};
