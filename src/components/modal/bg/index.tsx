import { ComponentProps } from 'react';

import { Portal } from '@/components/common/portal';
import { useDisableGlobalScroll } from '@/hooks/use-disable-global-scroll';
import { portal } from '@/styles/portal';
import { cn } from '@/utils/cn';

export const ModalBG = ({ children, className, ...props }: ComponentProps<'div'>) => {
  useDisableGlobalScroll();

  return (
    <Portal>
      <div className={cn(portal.background, className)} {...props}>
        {children}
      </div>
    </Portal>
  );
};
