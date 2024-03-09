import { Link } from 'react-router-dom';

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto max-w-[75ch]'>
      <button onClick={window.print}>PDF 저장</button>
      <Link to='/info'>INFO</Link>
      <Link to='/project'>PROJECT</Link>
      {children}
    </div>
  );
};
