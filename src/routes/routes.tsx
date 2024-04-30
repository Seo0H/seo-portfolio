import { Suspense, lazy } from 'react';

import { MDXProvider } from '@mdx-js/react';
import { Outlet, createBrowserRouter, redirect } from 'react-router-dom';

import { GlobalLayout } from '@/components/layout/global';
import { MainSkeleton } from '@/components/loading';
import { components } from '@/components/mdx';
import { ThemeProvider } from '@/context/theme';
import { OGProvider } from '@/hooks/og';

import { transition } from './utils';

const InfoPage = lazy(() => transition(import('@/pages/info')));
const ProjectPage = lazy(() => transition(import('@/pages/project')));

export const router = createBrowserRouter([
  {
    element: (
      <OGProvider>
        <ThemeProvider>
          <MDXProvider components={components}>
            <GlobalLayout>
              <Suspense fallback={<MainSkeleton />}>
                <Outlet />
              </Suspense>
            </GlobalLayout>
          </MDXProvider>
        </ThemeProvider>
      </OGProvider>
    ),
    children: [
      { path: '/', loader: () => redirect('/info') },
      {
        path: '/info',
        element: <InfoPage />,
      },
      { path: '/project/:id', element: <ProjectPage /> },
    ],
  },
]);
