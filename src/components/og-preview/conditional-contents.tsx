/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react';

import { Spinner } from '@/components/common/spinner';

import type { ErrorOGState, OGStateData, SuccessOGState } from '@/hooks/og';

export const ogCardState: Record<OGStateData['state'], (props: OGStateData) => ReactNode> = {
  loading: () => (
    <div role='status' className='flex min-h-[9rem] w-full flex-1 items-center justify-center'>
      <Spinner />
    </div>
  ),

  success: (props: OGStateData) => {
    if (!isSuccessOgData(props)) return;

    const {
      data: { result },
    } = props;

    const { ogImage, ogTitle, ogDescription, ogSiteName } = result;

    return (
      <>
        <img
          className='not-prose max-h-[4rem] min-h-[4rem] min-w-[20rem]  object-cover'
          src={Array.isArray(ogImage) ? ogImage[0].url : ogImage}
        />
        <div className='px-2 py-1 *:m-0 *:line-clamp-1'>
          <h4 className=''>{ogTitle}</h4>
          <p className='text-sm'>{ogDescription}</p>
          <p className='text-[12px]'> {ogSiteName}</p>
        </div>
      </>
    );
  },
  // TODO: ERROR 처리
  error: (props: OGStateData) => {
    if (!isErrorOgData(props)) return;
    console.log('🚀 ~ isErrorOgData ~ props:', props);

    return <div>ERROR!</div>;
  },
};

const isSuccessOgData = (ogState: OGStateData): ogState is SuccessOGState => {
  if (ogState.state === 'success') return true;
  return false;
};

const isErrorOgData = (ogState: OGStateData): ogState is ErrorOGState => {
  if (ogState.state === 'error') return true;
  return false;
};
