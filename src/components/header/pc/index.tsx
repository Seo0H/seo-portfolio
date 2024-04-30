import { Link } from 'react-router-dom';

import { Dropdown } from '@/components/common/form/dropdown';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

import { ProjectMenu } from '../project-menu';
import { ToggleGlobalSetting } from '../setting';

export const PCHeader = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <Link to='/info' className={cn(buttons.default, 'hidden sm:block')}>
        INFO
      </Link>

      <Dropdown className={cn('rounded-md outline-gray-100')} options={{ hover: true }}>
        <Dropdown.Trigger
          className={cn(buttons.default)}
          openStyle='w-full bg-white dark:bg-slate-800 outline outline-gray-200'
        >
          Projects
        </Dropdown.Trigger>

        <Dropdown.List className={cn(buttons.toggleBg, 'mt-2 w-[300px] px-4 py-2')}>
          <ProjectMenu projectWrapper={({ children }) => <Dropdown.Item {...{ children }} />} />
        </Dropdown.List>
      </Dropdown>

      <ToggleGlobalSetting />
    </div>
  );
};
