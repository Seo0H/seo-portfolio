import type { ComponentPropsWithRef } from 'react';

import type { UseRadioGroupProps } from './use-radio-group';

type Omitted = 'onChange' | 'value' | 'defaultValue' | 'defaultChecked';

type RadioGroupStyleProps = {
  groupClassName?: string;
};

export interface RadioGroupProps
  extends UseRadioGroupProps,
    Omit<ComponentPropsWithRef<'div'>, Omitted>,
    RadioGroupStyleProps {}
