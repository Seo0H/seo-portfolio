import { useDropdownContext } from '@/components/common/form/dropdown/context';
import { Radio, type RadioProps } from '@/components/common/form/radio/radio/radio';
import { cn } from '@/utils/cn';

export const Item = ({
  className,
  checkedStyle,
  ...props
}: Omit<RadioProps, 'labelStyle' | 'inputStyle'> & { className?: string }) => {
  const dropdown = useDropdownContext();
  return (
    dropdown?.triggerOpen && (
      <Radio
        checkedStyle={checkedStyle}
        labelStyle={cn('cursor-pointer w-full hover:bg-slate-100', className)}
        inputStyle='hidden'
        {...props}
      />
    )
  );
};
