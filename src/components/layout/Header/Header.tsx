import Image from 'next/image';
import Link from 'next/link';

import { AltArrowDown } from '@solar-icons/react/ssr';

import { Button } from '@/components/ui';
import type { MenuItem, MenuItemChild } from '@/types/components/MenuItem';

import logo from '../.././../app/icon.png';
import styles from './Header.module.scss';
import { HeaderClient } from './HeaderClient';

type Props = {
  menuItems: MenuItem[];
};

function DesktopNavItem({ item }: { item: MenuItem }) {
  const hasChildren = item.children.length > 0;

  return (
    <li className={styles.navItem}>
      <Button
        href={item.path}
        variant="ghost"
        className={styles.navLink}
        {...(item.isDisabled && { 'aria-disabled': 'true' })}
      >
        {item.title}
        {hasChildren && <AltArrowDown size="1em" weight="Linear" />}
      </Button>
      {hasChildren && (
        <div className={styles.dropdown}>
          <ul className={styles.dropdownList} role="list">
            {item.children.map((child: MenuItemChild) => (
              <li key={child.path}>
                <Button
                  href={child.path}
                  variant="ghost"
                  wide
                  className={styles.dropdownLink}
                  {...(child.isDisabled && { 'aria-disabled': 'true' })}
                >
                  {child.title}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function MobileNav({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <nav className={styles.mobileNav} aria-label="Мобильная навигация">
      <ul className={styles.mobileNavList}>
        {menuItems.map((item) => (
          <li key={item.path} className={styles.mobileNavItem}>
            <Button
              href={item.path}
              variant="ghost"
              className={styles.mobileNavLink}
              {...(item.isDisabled && { 'aria-disabled': 'true' })}
            >
              {item.title}
            </Button>
            {item.children.length > 0 && (
              <ul className={styles.mobileNavChildren}>
                {item.children.map((child: MenuItemChild) => (
                  <li key={child.path}>
                    <Button
                      href={child.path}
                      variant="ghost"
                      className={styles.mobileNavChildLink}
                      {...(child.isDisabled && { 'aria-disabled': 'true' })}
                    >
                      {child.title}
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header({ menuItems }: Props) {
  const sorted = [...menuItems].sort((a, b) => a.order - b.order);
  const leftItems = sorted.filter((i) => i.side === 'left');
  const rightItems = sorted.filter((i) => i.side === 'right');

  return (
    <HeaderClient mobileMenuNav={<MobileNav menuItems={sorted} />}>
      <Link href="/" className={styles.logo} aria-label="На главную">
        <Image src={logo} alt="" width={32} height={32} priority />
      </Link>
      <nav className={styles.nav} aria-label="Основная навигация">
        <ul className={styles.navLeft}>
          {leftItems.map((item) => (
            <DesktopNavItem key={item.path} item={item} />
          ))}
        </ul>
        <ul className={styles.navRight}>
          {rightItems.map((item) => (
            <DesktopNavItem key={item.path} item={item} />
          ))}
        </ul>
      </nav>
    </HeaderClient>
  );
}
