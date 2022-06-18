import React from 'react';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '../divider/divider';
import { Box } from '../layout/box';

export type LinkListItem = {
  label: string;
  component: React.ElementType<any>;
  itemProps: any;
  icon: React.ElementType;
};

export interface LeftSideDrawerProps extends Omit<MuiDrawerProps, 'anchor' | 'children'> {
  linkList: LinkListItem[];
}

export function LeftSideDrawer(props: LeftSideDrawerProps) {
  const { linkList, onClose, ...rest } = props;

  return (
    <MuiDrawer onClose={onClose} anchor="left" {...rest}>
      <Box role="presentation">
        <List>
          {linkList.map(({
            label, component: Component, itemProps, icon: Icon,
          }, idx) => (
            <>
              <Component key={label} {...itemProps}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={label} />
                  </ListItemButton>
                </ListItem>
              </Component>
              {!(idx === linkList.length - 1) && <Divider key={`${label}-divider`} />}
            </>
          ))}
        </List>
      </Box>
    </MuiDrawer>
  );
}
