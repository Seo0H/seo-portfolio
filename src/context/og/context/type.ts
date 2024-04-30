/* eslint-disable no-unused-vars */
import type { ErrorResult as OGErrorResult, SuccessResult } from 'open-graph-scraper';

export type OGContext = {
  openGraph: OgUrlKeyValue;
  setOpenGraphData: (url: string) => Promise<void>;
};

export type ErrorResult = OGErrorResult | string;

export type OgUrlKeyValue = { [url: string]: OGStateData | undefined };

export type OGStateData =
  | {
      state: 'loading';
    }
  | { state: 'success'; data: SuccessResult }
  | { state: 'error'; error: ErrorResult };

export type SuccessOGState = Extract<OGStateData, { state: 'success' }>;
export type ErrorOGState = Extract<OGStateData, { state: 'error' }>;

export type OgReducerAction =
  | { url: string; type: 'loading' }
  | { url: string; type: 'success'; data: SuccessResult }
  | { url: string; type: 'error'; error: ErrorResult };
