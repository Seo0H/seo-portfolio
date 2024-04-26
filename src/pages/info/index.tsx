import Contents from '@contents/info/contents.mdx';

import animate from '@/styles/animation.module.css';
import { cn } from '@/utils/cn';

const InfoPage = () => {
  return (
    <div className={cn('[&_.print-breakpoint]:print:break-inside-avoid', animate['fade-in'])}>
      <Contents />
    </div>
  );
};

export default InfoPage;
