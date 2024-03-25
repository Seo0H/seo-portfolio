import { ComponentProps } from 'react';

import { RadioGroup } from '@/components/common/form/radio';
import { cn } from '@/utils/cn';

import { DropdownContext } from './context';
import { Item } from './item';
import { Trigger } from './trigger';
import { useDropdown } from './use-dropdown';

export type DropDownProps = {
  onChange: (value: string) => void;
} & Omit<ComponentProps<'div'>, 'onChange'>;

export const Dropdown = ({ children, onChange, className }: DropDownProps) => {
  const values = useDropdown({ onChange });
  const { triggerOpen, handleClick } = values;
  // useBackgroundEvent(handleTrigger, [triggerOpen]); // TODO: 배경 클릭 시 드롭다운 닫침

  return (
    <DropdownContext.Provider value={values}>
      <RadioGroup
        groupClassName={cn(
          `${triggerOpen && `bg-white shadow-md [&_*]:border-b-[0.5px] border-gray-200`}`,
          className,
        )}
        onChange={handleClick}
      >
        {children}
      </RadioGroup>
    </DropdownContext.Provider>
  );
};

Dropdown.Item = Item;
Dropdown.Trigger = Trigger;
