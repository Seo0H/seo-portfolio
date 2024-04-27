import { useNavigate, useParams } from 'react-router-dom';

import { Icon } from '@/asset';
import { portfolioPath, projectKeys } from '@/constant/portfolio-page';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

export const MovePage = () => {
  const { id } = useParams();

  // NOTE: `portfolioPath` 에서 info page idx 는 0
  // projectKeys 요소들의 위치는 projectKeys 위치에서 + 1 된 순서임
  const curIdx = projectKeys.findIndex((key) => key === id) + 1;
  const navigator = useNavigate();

  const handelClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonName = event.currentTarget.name;

    if (buttonName === 'left' && curIdx > 0) {
      navigator(portfolioPath[curIdx - 1]);
    }

    if (buttonName === 'right' && curIdx < portfolioPath.length - 1) {
      navigator(portfolioPath[curIdx + 1]);
    }

    window.scroll({ top: 0, left: 100, behavior: 'smooth' });
  };

  return (
    <div className='absolute right-0  flex justify-end print:hidden'>
      <div className='fixed bottom-0 z-10 mb-8 flex rounded-md border-2 border-slate-200 bg-white shadow-md'>
        <button
          name='left'
          onClick={handelClick}
          className={cn(buttons.default, 'rounded-none border-r-2')}
        >
          <Icon.Arrow.Left className='size-7' />
        </button>
        <button name='right' onClick={handelClick} className={cn(buttons.default, 'rounded-none')}>
          <Icon.Arrow.Right className='size-7' />
        </button>
      </div>
    </div>
  );
};
