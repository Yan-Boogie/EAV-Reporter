import { RouteProps, Redirect } from 'react-router-dom';
import {
  BuildReport, History, HtmlReport, Report,
} from './pages';

export const routes: RouteProps[] = [
  {
    path: 'build-report',
    children: <BuildReport />,
  },
  {
    path: 'history',
    children: <History />,
  },
  {
    path: 'html-report',
    children: <HtmlReport />,
  },
  {
    path: 'report',
    children: <Report />,
  },
  {
    path: ['', '*'],
    children: ({ match }) => <Redirect to={`${match?.url}build-report`} />,
  },
];
