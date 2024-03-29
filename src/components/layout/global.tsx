export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto max-w-global-inner-width bg-white p-header px-4 md:px-10 print:p-0'>
      <div className='pt-2 print:p-0'>{children}</div>
    </div>
  );
};
