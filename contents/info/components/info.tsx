import { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const InfoSkillGrid = ({ className, ...props }: ComponentProps<'div'>) => (
  <div
    className={cn('mt-3 grid-rows-1 md:grid md:grid-cols-[8rem_1fr] print:block', className)}
    {...props}
  />
);
