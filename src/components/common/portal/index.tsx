import { ComponentProps } from 'react';

import { createPortal } from 'react-dom';

export const Portal = ({ children }: ComponentProps<'div'>) => {
  return createPortal(children, document.body);
};
