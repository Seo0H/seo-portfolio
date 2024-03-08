/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react';

import { Spinner } from '@/components/common/spinner';

import type { OGState } from '@/components/mdx/a/reducer';

export const ogCardState: Record<
  OGState['state'],
  (props: Extract<OGState, { state: 'success' }> | undefined) => ReactNode
> = {
  loading: () => (
    <div role='status' className='flex min-h-[9rem] w-full flex-1 items-center justify-center'>
      <Spinner />
    </div>
  ),

  success: (props: Extract<OGState, { state: 'success' }> | undefined) => {
    if (!props) {
      throw new Error('og card error');
    }

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
  error: () => undefined,
};
