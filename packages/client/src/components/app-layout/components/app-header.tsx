/* eslint-disable @typescript-eslint/no-unused-vars */
import { css } from '@emotion/react';
import { useMemo } from 'react';
import {
  Box, Typography, Breadcrumbs, BreadcrumbItem,
} from 'ui-modules';

export interface AppHeaderProps {
  path: string;
}

const classes = {
  boxWrapper: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
};

/**
 * @todo
 * Breadcrumbs
 */
function AppHeader(props: AppHeaderProps) {
  const { path } = props;

  // const breadcrumbs = useMemo<BreadcrumbItem[]>(() => {

  // }, []);

  return (
    <Box css={classes.boxWrapper} component="section">
      <Typography component="h1" variant="h4" color="primary">
        EAV-Reporter
      </Typography>
      {/* Breadcrumb */}
    </Box>
  );
}

export default AppHeader;
