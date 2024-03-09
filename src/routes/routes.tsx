import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import { GlobalLayout } from '@/components/layout/global';
import InfoPage from '@/pages/info';
import ProjectPage from '@/pages/project';

export const router = createBrowserRouter([
  {
    element: (
      <GlobalLayout>
        <Outlet />
      </GlobalLayout>
    ),
    children: [
      { path: '/', loader: () => redirect('/info') },
      { path: '/info', element: <InfoPage /> },
      { path: '/project', element: <ProjectPage /> },
    ],
  },
]);
