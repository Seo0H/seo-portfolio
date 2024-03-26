import { type ComponentPropsWithRef, forwardRef, createRef } from 'react';

import { callAll } from '@/utils/call-all-handlers';
import { cn } from '@/utils/cn';

import { useRadioGroupContext } from '../radio-group/context';

import { useRadio } from './use-radio';
import type { UseRadioProps } from '../types';

type Omitted = 'onChange' | 'defaultChecked' | 'checked' | 'type' | 'value' | 'className';

type RadioStyleProps = {
  labelStyle?: string;
  inputStyle?: string;
  checkedStyle?: string;
};

export interface RadioProps
  extends UseRadioProps,
    Omit<ComponentPropsWithRef<'input'>, Omitted>,
    RadioStyleProps {}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  props,
  ref = createRef(),
) {
  const {
    children,
    onChange: onChangeProp,
    value,
    inputStyle,
    labelStyle,
    checkedStyle,
    ...rest
  } = props;

  const group = useRadioGroupContext();

  let isChecked = props.isChecked;
  if (group?.value != null && value != null) {
    isChecked = group.value === value;
  }

  let onChange = onChangeProp;

  if (group?.onChange && value != null) {
    onChange = callAll(group.onChange, onChangeProp);
  }

  const name = props?.name ?? group?.name;

  const { getRadioProps } = useRadio({
    ...rest,
    onChange,
    isChecked,
    name,
    value,
  });

  const radioInputProps = getRadioProps({ name, ref });

  return (
    <label
      htmlFor={radioInputProps.id}
      className={cn(labelStyle, `${radioInputProps.checked && checkedStyle}`, `custom-radio`)}
    >
      <input type='radio' className={inputStyle} {...radioInputProps} />
      {children}
    </label>
  );
});
