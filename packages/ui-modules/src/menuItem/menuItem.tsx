import React from 'react';
import MuiMenuItem from '@mui/material/MenuItem';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';

export type MenuItemProps = Omit<MuiMenuItemProps, 'autoFocus' | 'divider'>;

export const MenuItem = (props: MenuItemProps) => {
  const { children, ...rest } = props;

  return (
    <MuiMenuItem autoFocus={false} divider {...rest}>
      {children}
    </MuiMenuItem>
  );
};
