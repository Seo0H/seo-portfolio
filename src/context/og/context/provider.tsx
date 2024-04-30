import { type ReactNode } from 'react';

import { isOgError } from '@/components/mdx/a/utils';

import { getOGData } from '../utils/get-og-data';

import { OGContext } from './context';
import { useOGReducer } from './reducer';

export const OGProvider = ({ children }: { children: ReactNode }) => {
  const [openGraph, dispatchOpenGraph] = useOGReducer();

  const handleOgData = async (url: string) => {
    // 이미 존재할 경우 og 데이터 fetch를 진행하지 않음
    if (openGraph[url]?.state === 'success') return;

    try {
      const data = await getOGData(url);

      if (isOgError(data)) {
        dispatchOpenGraph({ url, type: 'error', error: data });
      } else {
        dispatchOpenGraph({ url, type: 'success', data });
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatchOpenGraph({ url, type: 'error', error: error.message });
      } else {
        throw error;
      }
    }
  };

  return (
    <OGContext.Provider value={{ openGraph, setOpenGraphData: handleOgData }}>
      {children}
    </OGContext.Provider>
  );
};
