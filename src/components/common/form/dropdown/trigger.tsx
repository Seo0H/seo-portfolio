import type { ComponentProps } from 'react';

import { useDropdownContext } from '@/components/common/form/dropdown/context';
import { cn } from '@/utils/cn';

export const Trigger = ({
  children,
  className,
  openStyle,
  ...props
}: ComponentProps<'div'> & { openStyle?: string }) => {
  const dropdown = useDropdownContext();

  return (
    <div
      onClick={dropdown?.handleTrigger}
      className={cn(`w-full cursor-pointer`, className, `${dropdown?.triggerOpen && openStyle}`)}
      {...props}
    >
      {children}
    </div>
  );
};
