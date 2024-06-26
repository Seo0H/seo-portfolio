import type { ComponentProps } from 'react';

import { Indicator } from '@/components/common/indicator';

export const Default = ({
  activeIdx,
  ...props
}: Omit<ComponentProps<typeof Indicator>, 'activeStyle' | 'className'>) => (
  <Indicator
    className='h-1 w-2 rounded-full bg-slate-300 transition-all dark:bg-slate-600'
    activeIdx={activeIdx}
    activeStyle='w-4 bg-slate-500 dark:bg-slate-400'
    {...props}
  />
);
