import { Radio, type RadioProps } from '@/components/common/form/radio/radio/radio';
import { useDropdownContext } from '@/components/dropdown/context';

export const Item = ({
  className,
  ...props
}: Omit<RadioProps, 'labelStyle' | 'inputStyle'> & { className?: string }) => {
  const dropdown = useDropdownContext();
  return (
    dropdown?.triggerOpen && (
      <Radio
        checkedStyle='bg-gray-100'
        labelStyle={'cursor-pointer w-full text-center hover:bg-slate-100' + className}
        inputStyle='hidden'
        {...props}
      />
    )
  );
};
