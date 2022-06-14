export enum ContextValid {
  INEXIST,
  EXIST,
  BOTH,
}

export type Navigation = {
  label: string;
  path: string;
  contextValid: ContextValid;
};

export type Button = {
  label: string;
  action: () => void;
};

export type MenuItem = Navigation | Button;

const navigations: Navigation[] = [
  { label: '產製報表', path: '/build-report', contextValid: 0 },
  { label: '報表結果', path: '/history', contextValid: 1 },
  { label: '靜態報表', path: '/html-report', contextValid: 1 },
  { label: '歷史紀錄', path: '/history', contextValid: 2 },
];

export const isNavigation = (el: any): el is Navigation => 'path' in el && 'contextValid' in el;

export const menuItems: MenuItem[] = [
  ...navigations,
  { label: '重製報表', action: () => console.log('remove context!!') },
];
