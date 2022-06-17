import React from 'react';
import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '../divider/divider';
import { Box } from '../layout/box';

export type LinkListItem = {
  label: string;
  to: string;
};

export interface LeftSideDrawerProps extends Omit<MuiDrawerProps, 'anchor' | 'children'> {
  linkList: LinkListItem[];
  linkComponent: React.ElementType<any>;
}

export function LeftSideDrawer(props: LeftSideDrawerProps) {
  const {
    linkList, onClose, linkComponent: LinkComponent, ...rest
  } = props;

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    onClose(event, 'backdropClick');
  };

  return (
    <MuiDrawer {...rest}>
      <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
        <List>
          {linkList.map((el, idx) => (
            <>
              <LinkComponent key={el.label} to={el.to}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary={el.label} />
                  </ListItemButton>
                </ListItem>
              </LinkComponent>
              {!(idx === linkList.length - 1) && <Divider />}
            </>
          ))}
        </List>
      </Box>
    </MuiDrawer>
  );
}
