import type { ComponentProps } from 'react';

import { useDropdownContext } from '@/components/common/form/dropdown/context';
import { cn } from '@/utils/cn';

export const Trigger = ({
  children,
  className,
  openStyle,
  ...props
}: ComponentProps<'div'> & { openStyle?: string }) => {
  const { handleOpen, handleClose, triggerOpen, options } = useDropdownContext();

  return (
    <div
      // onClick={handleTrigger}
      onMouseEnter={options?.hover ? handleOpen : undefined}
      onMouseLeave={options?.hover ? handleClose : undefined}
      className={cn(`w-full cursor-pointer`, className, `${triggerOpen && openStyle}`)}
      {...props}
    >
      {children}
    </div>
  );
};
