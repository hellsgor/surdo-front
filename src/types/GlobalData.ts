import type { MenuItem } from './components/MenuItem';
import type { Cta } from './widgets/Cta';
import type { Footer } from './widgets/Footer';

export interface GlobalData {
  menuItems: MenuItem[];
  cta: Cta;
  footer: Footer;
}
