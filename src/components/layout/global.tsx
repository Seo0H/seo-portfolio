export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto max-w-global-inner-width bg-white p-header px-4 md:px-10'>
      <div className='pt-2'>{children}</div>
    </div>
  );
};
