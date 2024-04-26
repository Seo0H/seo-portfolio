export const MainSkeleton = () => {
  return (
    <div className='h-full w-full animate-pulse'>
      <div className='mb-1 h-7 w-1/3 rounded-md bg-gray-200' />
      <div className='mb-10 h-12 w-2/3 rounded-md bg-gray-200' />
      <div className='mb-5 flex gap-2'>
        <div className='size-96 rounded-md bg-gray-200' />
        <div className='size-96 rounded-md bg-gray-200' />
        <div className='size-96 rounded-md bg-gray-200' />
      </div>

      <div className='mb-1 h-8 w-full rounded-md bg-gray-200' />
      <div className='mb-1 h-8 w-full rounded-md bg-gray-200' />
      <div className='mb-1 h-8 w-full rounded-md bg-gray-200' />
      <div className='mb-1 h-8 w-full rounded-md bg-gray-200' />
    </div>
  );
};
