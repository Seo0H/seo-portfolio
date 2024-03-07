import { Outlet, createBrowserRouter } from 'react-router-dom';

import { GlobalLayout } from '@/components/layout/global';

import MainPage from '../pages/main/index';

export const router = createBrowserRouter([
  {
    element: (
      <GlobalLayout>
        <Outlet />
      </GlobalLayout>
    ),
    children: [{ path: '/', element: <MainPage /> }],
  },
]);
