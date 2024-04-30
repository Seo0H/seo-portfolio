import { ComponentProps, ReactNode, useState } from 'react';

import { Icon } from '@/asset';
import { cn } from '@/utils/cn';

import { EllipsisModal } from './modal';

export const EllipsisMenu = ({
  className,
  menu,
  ...props
}: Omit<ComponentProps<'button'>, 'children' | 'onClick'> & { menu: ReactNode[] }) => {
  const [isShown, setShown] = useState(false);

  const handelToggle = () => {
    setShown(!isShown);
  };

  return (
    <>
      {isShown && <EllipsisModal onClose={() => setShown(false)} contents={menu} />}

      {/* trigger */}
      <button onClick={handelToggle} className={cn(className)} {...props}>
        <Icon.Ellipsis.Vertical />
      </button>
    </>
  );
};
