import { useReducer } from 'react';

import type { OgReducerAction, OGStateData, OgUrlKeyValue } from './type';

const initialOGState: OgUrlKeyValue = {};
export const initialOgDataState: OGStateData = { state: 'loading' };

const openGraphReducer = (openGraph: OgUrlKeyValue, action: OgReducerAction): OgUrlKeyValue => {
  const { type, url } = action;

  switch (type) {
    case 'loading': {
      return { ...openGraph, [url]: { state: 'loading' } };
    }
    case 'error': {
      return { ...openGraph, [url]: { state: 'error', error: action.error } };
    }
    case 'success': {
      return { ...openGraph, [url]: { state: 'success', data: action.data } };
    }
    default:
      return { ...openGraph, [url]: { state: 'loading' } };
  }
};

export const useOGReducer = () => useReducer(openGraphReducer, initialOGState);
