import { ComponentProps } from 'react';

import { createPortal } from 'react-dom';

export const Portal = ({ children }: { children: React.ReactNode } & ComponentProps<'div'>) => {
  return createPortal(children, document.body);
};
