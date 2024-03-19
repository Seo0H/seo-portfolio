import { useReducer } from 'react';

import type { ErrorResult, SuccessResult } from 'open-graph-scraper';

export type OGState =
  | {
      state: 'loading';
    }
  | { state: 'success'; data: SuccessResult }
  | { state: 'error'; error: ErrorResult };

const initialOGState: OGState = {
  state: 'loading',
};

type Action =
  | { type: 'loading' }
  | { type: 'success'; data: SuccessResult }
  | { type: 'error'; error: ErrorResult };

const openGraphReducer = (_: OGState, action: Action): OGState => {
  switch (action.type) {
    case 'loading': {
      return { state: 'loading' };
    }
    case 'error': {
      return { state: 'error', error: action.error };
    }
    case 'success': {
      return { state: 'success', data: action.data };
    }
    default:
      return { state: 'loading' };
  }
};

export const useOG = () => useReducer(openGraphReducer, initialOGState);
