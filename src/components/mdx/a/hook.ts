import { type ComponentProps, useCallback, useState, type SyntheticEvent } from 'react';

import axios, { type CancelTokenSource } from 'axios';

import { useOG } from '@/components/mdx/a/reducer';
import { isOgError } from '@/components/mdx/a/utils';
import { debounce } from '@/utils/debounce';

import type { OGResult } from '@/components/mdx/a/type';

export const useOgPreview = (props: ComponentProps<'a'>) => {
  const [openGraph, dispatchOpenGraph] = useOG();
  const [isShown, setIsShown] = useState(false);

  const fetchOpenGraphInfo = useCallback(
    async (url: string, cancelSource?: CancelTokenSource) => {
      dispatchOpenGraph({ type: 'loading' });

      try {
        const { data } = await axios.post<OGResult>(import.meta.env.VITE_BACKEND_URL, {
          url,
          cancelSource,
        });

        if (isOgError(data)) dispatchOpenGraph({ type: 'error', error: data });
        else dispatchOpenGraph({ type: 'success', data });
      } catch (error) {
        if (error instanceof Error) console.error('에러 발생:', error.message);
        else throw error;
      }
    },
    [props.href],
  );

  /**
   * @param eventType Types of events that trigger OG previews
   */
  const handleShowPreview = (eventType: string) =>
    debounce(async (e: SyntheticEvent) => {
      if (props.title !== 'preview' || !props.href) return;

      if (e.type === eventType) {
        setIsShown(true);

        if (openGraph.state !== 'success') {
          const CancelToken = axios.CancelToken;
          const source = CancelToken.source();
          await fetchOpenGraphInfo(props.href, source);
          return () => source.cancel();
        }
      } else setTimeout(() => setIsShown(false), 100);
    });

  return { isShown, handleShowPreview, openGraph };
};
