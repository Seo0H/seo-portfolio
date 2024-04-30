import { useDropdownContext } from '@/components/common/form/dropdown/context';
import { Radio, type RadioProps } from '@/components/common/form/radio/radio/radio';
import { cn } from '@/utils/cn';

export const Item = ({
  className,
  checkedStyle,
  ...props
}: Omit<RadioProps, 'labelStyle' | 'inputStyle'> & { className?: string }) => {
  const { triggerOpen } = useDropdownContext();
  return (
    triggerOpen && (
      <Radio
        checkedStyle={checkedStyle}
        labelStyle={cn('cursor-pointer w-full', className)}
        inputStyle='hidden'
        {...props}
      />
    )
  );
};
