import { useReducer } from 'react';

import type { ErrorResult as OGErrorResult, SuccessResult } from 'open-graph-scraper';

type ErrorResult = OGErrorResult | string;

export type OGState =
  | {
      state: 'loading';
    }
  | { state: 'success'; data: SuccessResult }
  | { state: 'error'; error: ErrorResult };

export type SuccessOGState = Extract<OGState, { state: 'success' }>;
export type ErrorOGState = Extract<OGState, { state: 'error' }>;

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

export const useOGReducer = () => useReducer(openGraphReducer, initialOGState);
