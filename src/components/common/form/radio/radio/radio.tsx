import { type ComponentPropsWithRef, forwardRef, createRef } from 'react';

import { callAll } from '@/utils/call-all-handlers';
import { cn } from '@/utils/cn';

import { useRadioGroupContext } from '../radio-group/radio-group';

import { useRadio } from './use-radio';
import type { UseRadioProps } from '../types';

type Omitted = 'onChange' | 'defaultChecked' | 'checked' | 'type' | 'value' | 'className';

type RadioStyleProps = {
  labelClassName?: string;
  textClassName?: string;
  inputClassName?: string;
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
    inputClassName,
    labelClassName,
    textClassName,
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

  const radioInputProps = getRadioProps({ onChange, name, ref });

  return (
    <label
      htmlFor={radioInputProps.id}
      className={cn(
        labelClassName,
        `custom-radio`,
        `${radioInputProps.checked ? `bg-slate-100` : `bg-none`}`,
      )}
    >
      <input type='radio' className={inputClassName} {...radioInputProps} />
      <span className={textClassName}>{children}</span>
    </label>
  );
});
