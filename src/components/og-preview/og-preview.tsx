import { useEffect, useLayoutEffect, useRef } from 'react';

import axios from 'axios';

import { ogCardState } from '@/components/og-preview/conditional-contents';
import { useOGData } from '@/hooks/og/use-og-data';

export const OGPreviewCard = ({ url }: { url: string }) => {
  const { openGraph, getOGData } = useOGData(url);
  const { state } = openGraph;

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    getOGData(source);
    return () => source.cancel();
  }, [url]);

  useLayoutEffect(() => {
    window.addEventListener('mousemove', handelCardPosition);
    return () => window.removeEventListener('mousemove', handelCardPosition);
  }, []);

  // 커서
  const handelCardPosition = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const left = e.pageX;
    const top = e.pageY;

    const screenRight = window.innerWidth;
    const cardWidth = cardRef.current.clientWidth;
    const cardRight = cardWidth + left;

    const isCardOverflowWindow = cardRight > screenRight;
    // FIXME: 카드 overflow 시 화면 x축 스크롤 생성 방지
    if (isCardOverflowWindow) {
      cardRef.current.style.right = `${screenRight - left}px`;
    } else {
      cardRef.current.style.left = `${left}px`;
    }

    const marginTop = 20;
    cardRef.current.style.top = `${top + marginTop}px`;
  };

  return (
    <div
      ref={cardRef}
      className={`absolute z-10 m-0 flex w-[20rem] flex-col overflow-hidden
                  rounded-md border-[1px] border-solid border-slate-300 bg-slate-50 shadow-md `}
    >
      {ogCardState[state](state === 'success' ? openGraph : undefined)}
    </div>
  );
};
