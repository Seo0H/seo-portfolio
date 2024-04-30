import { ReactNode } from 'react';

import { Icon } from '@/asset';
import { ModalBG } from '@/components/modal/bg';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

export const EllipsisModal = ({
  onClose,
  contents,
}: {
  onClose: () => void;
  contents: ReactNode[];
}) => {
  return (
    <ModalBG>
      <div className='fixed right-4 top-4 w-full max-w-xs rounded-lg bg-white p-6 font-semibold text-slate-900 dark:bg-slate-800'>
        <button
          className={cn(
            buttons.default,
            'absolute right-5 top-5 flex items-center justify-center px-2',
          )}
          onClick={onClose}
        >
          <Icon.X />
        </button>

        <>
          {contents.map((el) => {
            return el;
          })}
        </>
      </div>
    </ModalBG>
  );
};
