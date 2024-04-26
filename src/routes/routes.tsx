import { Suspense, lazy } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import { Header } from '@/components/header';
import { GlobalLayout } from '@/components/layout/global';
import { MainSkeleton } from '@/components/loading';
import { components } from '@/components/mdx';
import { OGProvider } from '@/hooks/og';

const InfoPage = lazy(() => import('@/pages/info'));
const ProjectPage = lazy(() => import('@/pages/project'));

export const router = createBrowserRouter([
  {
    element: (
      // TODO: FIX HARD CODING
      <OGProvider>
        <MDXProvider components={components}>
          <Header />
          <GlobalLayout>
            <Suspense fallback={<MainSkeleton />}>
              <Outlet />
            </Suspense>
          </GlobalLayout>
        </MDXProvider>
      </OGProvider>
    ),
    children: [
      { path: '/', loader: () => redirect('/info') },
      { path: '/info', element: <InfoPage /> },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
]);
