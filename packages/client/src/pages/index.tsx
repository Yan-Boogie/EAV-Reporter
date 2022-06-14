import React, { Suspense } from 'react';

const Loading = () => <div>Loading...</div>;

const loadableComponent = (Component: React.LazyExoticComponent<() => JSX.Element>) => () => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const BuildReport = loadableComponent(React.lazy(() => import('./buildReport')));
export const History = loadableComponent(React.lazy(() => import('./history')));
export const HtmlReport = loadableComponent(React.lazy(() => import('./report')));
export const Report = loadableComponent(React.lazy(() => import('./report')));
