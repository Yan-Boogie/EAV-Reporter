import React, { Fragment } from 'react';
import {
  Switch, Route, useRouteMatch, RouteProps, match,
} from 'react-router-dom';

export interface RoutesProps {
  routes: RouteProps[];
  switchDisabled?: boolean;
}

function composeRoutePath(routeMatch: match, path: string | readonly string[]): string | string[] {
  if (typeof path === 'string') {
    return path ? `${routeMatch.url}/${path}`.replace(/\/\//g, '/') : routeMatch.url;
  }

  return path.map((p) => composeRoutePath(routeMatch, p) as string);
}

function Routes(props: RoutesProps) {
  const { routes, switchDisabled } = props;
  const routeMatch = useRouteMatch();
  const Component = switchDisabled ? Fragment : Switch;
  const content = routes.map(
    (route, index) => (typeof route.path === 'string' || route.path) && (
    // eslint-disable-next-line react/no-array-index-key
      <Route key={index} {...route} path={composeRoutePath(routeMatch, route.path)} />
    ),
  );

  return <Component>{content}</Component>;
}

export default Routes;
