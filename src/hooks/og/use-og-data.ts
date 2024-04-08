import { useCallback } from 'react';

import axios, { CancelTokenSource } from 'axios';

import { OGResult } from '@/components/mdx/a/type';
import { isOgError } from '@/components/mdx/a/utils';

import { useOGReducer } from './reducer';

export const useOGData = (url: string) => {
  const [openGraph, dispatchOpenGraph] = useOGReducer();

  const getOGData = useCallback(
    async (cancelSource?: CancelTokenSource) => {
      dispatchOpenGraph({ type: 'loading' });

      try {
        const { data } = await axios.post<OGResult>(import.meta.env.VITE_BACKEND_URL, {
          url,
          cancelSource,
        });

        if (isOgError(data)) dispatchOpenGraph({ type: 'error', error: data });
        else dispatchOpenGraph({ type: 'success', data });
      } catch (error) {
        if (error instanceof Error) {
          dispatchOpenGraph({ type: 'error', error: error.message });
        } else throw error;
      }
    },
    [url],
  );

  return { openGraph, getOGData };
};
