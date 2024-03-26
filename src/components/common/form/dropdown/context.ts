import { createContext, useContext } from 'react';

type TDropdownContext = {
  triggerName: string;
  triggerOpen: boolean;
  handleTrigger: () => void;
  handleTriggerName: (value: string) => void;
};

export const DropdownContext = createContext<TDropdownContext | undefined>(undefined);
export const useDropdownContext = () => useContext(DropdownContext);
