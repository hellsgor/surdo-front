export interface MenuItemChild {
  path: string;
  title: string;
  isDisabled: boolean;
}

export interface MenuItem {
  title: string;
  order: number;
  side: string;
  path: string;
  isDisabled: boolean;
  children: MenuItemChild[];
}
