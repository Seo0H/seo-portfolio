import { RadioGroup } from '@/components/common/form/radio';
import { cn } from '@/utils/cn';

import { DropdownContext, type DropdownOption } from './context';
import { Item } from './item';
import { List } from './list';
import { Trigger } from './trigger';
import { useDropdown } from './use-dropdown';
import type { RadioGroupProps } from '@/components/common/form/radio/radio-group/type';

export type DropDownProps = {
  onChange?: (value: string) => void;
  options?: DropdownOption;
} & RadioGroupProps;

export const Dropdown = ({ children, onChange, className, value, options }: DropDownProps) => {
  const values = useDropdown({ onChange });
  const { handleClick } = values;

  return (
    <DropdownContext.Provider value={{ ...values, options }}>
      <RadioGroup value={value} groupClassName={cn('relative', className)} onChange={handleClick}>
        {children}
      </RadioGroup>
    </DropdownContext.Provider>
  );
};

Dropdown.Item = Item;
Dropdown.List = List;
Dropdown.Trigger = Trigger;
