/* eslint-disable no-unused-vars */

import { createContext, useContext, useEffect } from 'react';

import { initialOgDataState } from './reducer';
import type { OGStateData, OGContext as TOGContext } from './type';

export const OGContext = createContext<TOGContext | undefined>(undefined);

export const useOGContext = (url: string): OGStateData => {
  const data = useContext(OGContext);
  if (!data) throw new Error('openGraph is undefined');

  const { openGraph, setOpenGraphData } = data;
  const targetOpenGraph = openGraph[url];

  useEffect(() => {
    setOpenGraphData(url);
  }, []);

  if (!targetOpenGraph?.state) return initialOgDataState;

  return { ...targetOpenGraph };
};
