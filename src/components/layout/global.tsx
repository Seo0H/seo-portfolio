import { Buttons } from '../button';
import { Header } from '../header';

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className='mx-auto min-h-[100vh] max-w-global-inner-width bg-white p-header px-4 md:px-10 print:p-0'>
        <div className='relative pt-2 print:pt-0'>
          <Buttons.MovePage />
          {children}
        </div>
      </div>
    </>
  );
};
