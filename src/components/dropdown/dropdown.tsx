import { ChangeEvent, useState } from 'react';

import { Radio, RadioGroup } from '@/components/common/form/radio';

import type { RadioProps } from '@/components/common/form/radio/radio/radio';

type DropDownProps = {
  label?: string;
  items: string[];
  onChange: (value: string) => void;
};

export const DropDown = ({ label, items, onChange }: DropDownProps) => {
  const [triggerOpen, setTrigger] = useState(false);
  const [triggerName, setTriggerName] = useState<string>(label ?? items[0]);

  const handleTrigger = () => {
    if (triggerOpen) {
      setTrigger(false);
    } else setTrigger(true);
  };

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setTriggerName(e.target.value);
    setTrigger(false);
  };

  // useBackgroundEvent(handleTrigger, [triggerOpen]); // TODO: 배경 클릭 시 드롭다운 닫침

  return (
    <RadioGroup groupClassName='flex flex-col items-center' onChange={handleClick}>
      <span onClick={handleTrigger}>{triggerName}</span>
      {triggerOpen &&
        items.map((item, idx) => (
          <DropDownItem key={`${item}-${idx}`} value={item}>
            {item}
          </DropDownItem>
        ))}
    </RadioGroup>
  );
};

const DropDownItem = (props: RadioProps) => (
  <Radio
    labelClassName='w-full text-center hover:bg-slate-100'
    inputClassName='hidden'
    {...props}
  />
);
