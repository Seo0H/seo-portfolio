import { MDXProvider } from '@mdx-js/react';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import { Header } from '@/components/header';
import { GlobalLayout } from '@/components/layout/global';
import { components } from '@/components/mdx';
import InfoPage from '@/pages/info';
import ProjectPage from '@/pages/project';

export const router = createBrowserRouter([
  {
    element: (
      <MDXProvider components={components}>
        <GlobalLayout>
          <Header />
          <Outlet />
        </GlobalLayout>
      </MDXProvider>
    ),
    children: [
      { path: '/', loader: () => redirect('/info') },
      { path: '/info', element: <InfoPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
]);
