import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItem, isNavigation } from '@@src/menu';

export interface AppLayoutProps {
  children: ReactNode;
  menuItems: MenuItem[];
}

/**
 * @todo
 * RWD
 */
function AppLayout(props: AppLayoutProps) {
  const { children, menuItems } = props;

  return (
    <div>
      <span>App Header with Breadcrumb</span>
      {menuItems.map((item, index) => (isNavigation(item) ? (
      // eslint-disable-next-line react/no-array-index-key
        <NavLink key={index} to={item.path} className="" activeClassName="">
          {item.label}
        </NavLink>
      ) : (
        <button type="button" onClick={item.action}>
          {item.label}
        </button>
      )))}
      {children}
    </div>
  );
}

export default AppLayout;
