import { useState, type ChangeEvent } from 'react';

import type { DropDownProps } from '@/components/common/form/dropdown/dropdown';

export const useDropdown = ({ onChange }: Pick<DropDownProps, 'onChange'>) => {
  const [triggerOpen, setTrigger] = useState(false);
  const [triggerName, setTriggerName] = useState('');

  const handleTrigger = () => {
    setTrigger(!triggerOpen);
  };

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    setTrigger(false);
    onChange(e.target.value);
    setTriggerName(e.target.value);
  };

  const handleTriggerName = (value: string) => setTriggerName(value);

  return { triggerName, triggerOpen, handleTrigger, handleClick, handleTriggerName };
};
