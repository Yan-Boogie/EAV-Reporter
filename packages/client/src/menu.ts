import BuildIcon from '@mui/icons-material/Build';
import OutputIcon from '@mui/icons-material/Output';
import HtmlIcon from '@mui/icons-material/Html';
import HistoryIcon from '@mui/icons-material/History';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export enum ContextValid {
  INEXIST,
  EXIST,
  BOTH,
}

export type Navigation = {
  label: string;
  path: string;
  contextValid: ContextValid;
  icon: React.ElementType;
};

export type Button = {
  label: string;
  action: () => void;
  icon: React.ElementType;
};

export type MenuItem = Navigation | Button;

const navigations: Navigation[] = [
  {
    label: '產製報表',
    path: '/build-report',
    contextValid: 0,
    icon: BuildIcon,
  },
  {
    label: '報表結果',
    path: '/history',
    contextValid: 1,
    icon: OutputIcon,
  },
  {
    label: '靜態報表',
    path: '/html-report',
    contextValid: 1,
    icon: HtmlIcon,
  },
  {
    label: '歷史紀錄',
    path: '/history',
    contextValid: 2,
    icon: HistoryIcon,
  },
];

export const isNavigation = (el: any): el is Navigation => 'path' in el && 'contextValid' in el;

export const menuItems: MenuItem[] = [
  ...navigations,
  { label: '重製報表', action: () => console.log('remove context!!'), icon: RestartAltIcon },
];
