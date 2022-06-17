import React from 'react';
import Tabs, { TabsProps } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export type TabItem = {
  label: string;
  to: string;
};

export interface NavTabsProps extends Omit<TabsProps, 'children'> {
  tabList: TabItem[];
  linkComponent: React.ElementType<any>;
}

export function NavTabs(props: NavTabsProps) {
  const { tabList, linkComponent, ...rest } = props;

  return (
    <Tabs {...rest}>
      {tabList.map((el) => (
        <Tab key={el.to} label={el.label} value={el.to} component={linkComponent} to={el.to} />
      ))}
    </Tabs>
  );
}
