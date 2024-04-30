import { createContext, useContext } from 'react';

type TDropdownContext = {
  triggerName: string;
  triggerOpen: boolean;
  handleTrigger: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleTriggerName: (value: string) => void;
  options?: DropdownOption;
};

export type DropdownOption = {
  hover: boolean;
};

export const DropdownContext = createContext<TDropdownContext | undefined>(undefined);

export const useDropdownContext = () => {
  const val = useContext(DropdownContext);
  if (!val) throw new Error('useDropdownContext must be inner DropdownContext.');
  return val;
};
