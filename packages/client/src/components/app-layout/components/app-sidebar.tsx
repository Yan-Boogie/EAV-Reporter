import { useState, Fragment } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IconButton, LeftSideDrawer, LeftSideDrawerProps } from 'ui-modules';

export type AppSidebarProps = Pick<LeftSideDrawerProps, 'linkList'>;

function AppSidebar(props: AppSidebarProps) {
  const { linkList } = props;
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpen((prevOpen) => !prevOpen)}>
        <ArrowRightAltIcon fontSize="large" />
      </IconButton>
      <LeftSideDrawer open={open} linkList={linkList} onClose={() => setOpen(false)} />
    </Fragment>
  );
}

export default AppSidebar;
