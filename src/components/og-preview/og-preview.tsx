import { ComponentProps, useLayoutEffect, useRef } from 'react';

import { ogCardState } from '@/components/og-preview/conditional-contents';
import { useOGContext } from '@/hooks/og';
import { cn } from '@/utils/cn';

export const OGPreviewCard = ({
  url,
  className,
  ...props
}: ComponentProps<'div'> & { url: string }) => {
  const openGraph = useOGContext(url);
  const { state } = openGraph;

  const cardRef = useRef<HTMLDivElement>(null);

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
      cardRight > screenRight;
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
      className={cn(
        `absolute z-10 m-0 flex w-[20rem] flex-col overflow-hidden
                  rounded-md border-[1px] border-solid border-slate-300 bg-slate-50 shadow-md`,
        className,
      )}
      {...props}
    >
      {ogCardState[state](openGraph)}
    </div>
  );
};
