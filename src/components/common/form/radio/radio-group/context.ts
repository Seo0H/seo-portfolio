import { createContext, useContext } from 'react';

import type { UseRadioGroupReturn } from './use-radio-group';

interface RadioGroupContext
  extends Pick<UseRadioGroupReturn, 'onChange' | 'value' | 'name' | 'isDisabled'> {}

export const RadioGroupContext = createContext<RadioGroupContext | undefined>(undefined);

export const useRadioGroupContext = () => {
  const value = useContext(RadioGroupContext);

  return value;
};
