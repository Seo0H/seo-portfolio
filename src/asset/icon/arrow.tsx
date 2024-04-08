import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

const Left = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    fill='currentColor'
    className={cn('h-4 w-4', className)}
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z'
      clipRule='evenodd'
    />
  </svg>
);

const Right = ({ className, ...props }: ComponentProps<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    fill='currentColor'
    className={cn('h-4 w-4', className)}
    {...props}
  >
    <path
      fillRule='evenodd'
      d='M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z'
      clipRule='evenodd'
    />
  </svg>
);

export const Arrow = { Left, Right };
