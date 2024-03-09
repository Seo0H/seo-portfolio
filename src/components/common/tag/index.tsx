import { type ComponentPropsWithRef, createRef, forwardRef } from 'react';

import { cn } from '@/utils/cn';

export const Tag = forwardRef<HTMLButtonElement, ComponentPropsWithRef<'button'>>(
  ({ className, ...props }, ref = createRef()) => {
    return (
      <button
        ref={ref}
        className={cn('rounded-full px-4 py-1 font-semibold', className)}
        {...props}
      />
    );
  },
);

Tag.displayName = 'Tag';
