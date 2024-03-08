import { ogCardState } from '@/components/mdx/a/og-preview/conditional-contents';

import type { OGState } from '@/components/mdx/a/reducer';

export const OGPreviewCard = ({ isHover, openGraph }: { isHover: boolean; openGraph: OGState }) => {
  const { state } = openGraph;

  return (
    isHover && (
      <div className='absolute top-[-9rem] z-10 flex w-[20rem] flex-col overflow-hidden rounded-md border-[1px] border-solid border-slate-300 bg-white shadow-md'>
        {ogCardState[state](state === 'success' ? openGraph : undefined)}
      </div>
    )
  );
};
