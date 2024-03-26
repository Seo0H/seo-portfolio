import { forwardRef } from 'react';

import { RadioGroupContext } from './context';
import type { RadioGroupProps } from './type';
import { useRadioGroup } from './use-radio-group';

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  function RadioGroup(props, ref) {
    const { children, isDisabled, groupClassName, ...rest } = props;

    const { value, onChange, name } = useRadioGroup(rest);

    const group = {
      name,
      onChange,
      value,
      isDisabled,
    };

    return (
      <RadioGroupContext.Provider value={group}>
        <div ref={ref} className={groupClassName}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    );
  },
);
