/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react';

import { Icon } from '@/asset';

import type { ErrorOGState, OGStateData, SuccessOGState } from '@/hooks/og';

export const ogCardState: Record<OGStateData['state'], (props: OGStateData) => ReactNode> = {
  loading: () => (
    <div role='status' className='flex min-h-[9rem] w-full flex-1 items-center justify-center'>
      <Icon.Spinner.Default />
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
        <div className='dark:bg-gradient-to-b dark:from-slate-50'>
          <img
            className='not-prose h-[9rem] w-full object-cover dark:mix-blend-multiply'
            src={Array.isArray(ogImage) ? ogImage[0].url : ogImage}
          />
        </div>
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
    const { error } = props;

    return (
      <div
        role='status'
        className='flex min-h-[9rem] w-full flex-1 flex-col items-center justify-center gap-2'
      >
        <Icon.Exclamation.Triangle className='size-9 stroke-slate-500' />
        <div className='flex flex-col items-center justify-center gap-0 text-sm'>
          <span>잠시 후 다시 시도해 보세요.</span>
          <span>Error message : {error.toString()}</span>
        </div>
      </div>
    );
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
