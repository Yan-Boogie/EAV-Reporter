import { ReactNode } from 'react';
import { css } from '@emotion/react';
import { Link, useRouteMatch } from 'react-router-dom';
import { MenuItem, isNavigation } from '@@src/menu';
import {
  Box, Button, LinkListItem, Container,
} from 'ui-modules';
import AppHeader from './components/app-header';
import AppSidebar from './components/app-sidebar';

export interface AppLayoutProps {
  children: ReactNode;
  menuItems: MenuItem[];
}

const classes = {
  appWrapper: css`
    width: 100%;
    height: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
  `,
  mainWrapper: css`
    flex-shrink: 1;
    flex-grow: 1;
    display: grid;
    grid-template-columns: 44px auto;
    column-gap: 8;
    align-items: center;
  `,
  navBtn: css`
    font-weight: 400;
    padding: 6px 24px 6px 8px;
  `,
  headerWrapper: css`
    flex-shrink: 0;
    flex-grow: 0;
  `,
  childrenContainer: css`
    height: 100%;
    padding: 16px;
  `,
};

function AppLayout(props: AppLayoutProps) {
  const { children, menuItems } = props;

  const routeMatch = useRouteMatch();

  const linkList: LinkListItem[] = menuItems.map((el) => (isNavigation(el)
    ? {
      label: el.label,
      component: ({ children: linkChildren, btnProps, ...rest }) => (
        <Link {...rest}>
          <Button {...btnProps}>{linkChildren}</Button>
        </Link>
      ),
      itemProps: {
        to: el.path,
        btnProps: {
          color: 'inherit',
          css: classes.navBtn,
        },
      },
      icon: el.icon,
    }
    : {
      label: el.label,
      component: ({ children: btnChildren, ...rest }) => <Button {...rest}>{btnChildren}</Button>,
      itemProps: {
        onClick: el.action,
        color: 'inherit',
        css: classes.navBtn,
      },
      icon: el.icon,
    }));

  return (
    <Box css={classes.appWrapper}>
      <Box css={classes.headerWrapper}>
        <AppHeader path={routeMatch.path} />
      </Box>
      <Box css={classes.mainWrapper}>
        <AppSidebar linkList={linkList} />
        <Container css={classes.childrenContainer}>{children}</Container>
      </Box>
    </Box>
  );
}

export default AppLayout;
