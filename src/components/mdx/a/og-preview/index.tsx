import { useEffect, useLayoutEffect, useRef } from 'react';

import { ogCardState } from '@/components/mdx/a/og-preview/conditional-contents';

import type { OGState } from '@/components/mdx/a/reducer';

export const OGPreviewCard = ({ isHover, openGraph }: { isHover: boolean; openGraph: OGState }) => {
  const { state } = openGraph;
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.addEventListener('mousemove', handelCardPosition);
    return () => window.removeEventListener('mousemove', handelCardPosition);
  }, []);

  const handelCardPosition = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const left = e.pageX;
    const top = e.pageY;

    const screenRight = window.innerWidth;
    const cardWidth = cardRef.current.clientWidth;
    const cardRight = cardWidth + left;

    // FIXME: true 여도 적용이 안되는 상황처리
    if (cardRight > screenRight) {
      cardRef.current.style.right = `${screenRight - left - 10}px`;
    } else {
      cardRef.current.style.left = `${left + 10}px`;
    }

    cardRef.current.style.top = `${top + 20}px`;
  };

  return (
    isHover && (
      <div
        ref={cardRef}
        className='absolute z-10 m-0 flex w-[20rem] flex-col overflow-hidden rounded-md border-[1px] border-solid border-slate-300 bg-slate-50 shadow-md  '
      >
        {ogCardState[state](state === 'success' ? openGraph : undefined)}
      </div>
    )
  );
};
