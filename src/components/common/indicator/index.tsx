import type { ComponentProps } from 'react';

import { cn } from '@/utils/cn';

export const Indicator = ({
  length,
  activeIdx,
  uniqId,
  activeStyle,
  className,
  ...props
}: {
  length: number;
  activeIdx: number;
  uniqId: string;
  activeStyle: string;
} & ComponentProps<'div'>) =>
  Array.from({ length }).map((_, idx) => (
    <div
      key={`indicator-${idx}-${uniqId}`}
      className={cn(className, idx === activeIdx && activeStyle)}
      {...props}
    />
  ));
