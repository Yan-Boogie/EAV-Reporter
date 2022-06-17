import React from 'react';
import MuiBreadcrumbs, { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export type BreadcrumbItem = {
  to: string;
  label: string;
};

export interface BreadcrumbsProps extends Omit<MuiBreadcrumbsProps, 'separator'> {
  breadcrumbs: BreadcrumbItem[];
  linkComponent: JSX.Element;
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { breadcrumbs, linkComponent } = props;

  const breadcrumbSet = new Set(breadcrumbs.map((el) => el.to));

  if (breadcrumbSet.size !== breadcrumbs.length) {
    throw new Error('BreadcrumbItem should be identified');
  }

  return (
    <MuiBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
      {breadcrumbs.map((el) => (
        <MuiLink key={el.to} component={linkComponent as any} underline="hover" to={el.to} color="inherit">
          {el.label}
        </MuiLink>
      ))}
    </MuiBreadcrumbs>
  );
}
