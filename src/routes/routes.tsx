import { Suspense, lazy } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import { Header } from '@/components/header';
import { GlobalLayout } from '@/components/layout/global';
import { components } from '@/components/mdx';

const InfoPage = lazy(() => import('@/pages/info'));
const ProjectPage = lazy(() => import('@/pages/project'));

export const router = createBrowserRouter([
  {
    element: (
      // TODO: FIX HARD CODING
      <Suspense fallback='...loading'>
        <MDXProvider components={components}>
          <Header />
          <GlobalLayout>
            <Outlet />
          </GlobalLayout>
        </MDXProvider>
      </Suspense>
    ),
    children: [
      { path: '/', loader: () => redirect('/info') },
      { path: '/info', element: <InfoPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
]);
