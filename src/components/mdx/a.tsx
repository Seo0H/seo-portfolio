import { ComponentProps } from 'react';

export const A = (props: ComponentProps<'a'>) => {
  return <a {...props} />;
};
