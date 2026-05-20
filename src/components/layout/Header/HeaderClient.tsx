'use client';

import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { Icon } from '@/components/ui';

import { Container } from '../Container/Container';
import styles from './Header.module.scss';

function useScrollVisibility(): boolean {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 10 || y < lastY);
      lastY = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible;
}

type Props = {
  children: React.ReactNode;
  mobileMenuNav: React.ReactNode;
};

export function HeaderClient({ children, mobileMenuNav }: Props) {
  const visible = useScrollVisibility();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const isClosing = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches && dialogRef.current?.open) {
        isClosing.current = false;
        dialogRef.current.close();
        document.body.style.overflow = '';
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const openMenu = () => {
    isClosing.current = false;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    dialog.focus();
  };

  const closeMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog || isClosing.current) return;
    isClosing.current = true;
    dialog.classList.add(styles.mobileDialogClosing);
    const onEnd = () => {
      dialog.close();
      dialog.classList.remove(styles.mobileDialogClosing);
      isClosing.current = false;
      document.body.style.overflow = '';
      openerRef.current?.blur();
    };
    dialog.addEventListener('animationend', onEnd, { once: true });
  };

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      closeMenu();
      return;
    }
    if ((e.target as HTMLElement).tagName === 'A') {
      closeMenu();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
    }
  };

  return (
    <header className={clsx(styles.header, !visible && styles.hidden)}>
      <Container className={styles.inner}>
        {children}
        <button
          ref={openerRef}
          className={styles.burgerButton}
          onClick={openMenu}
          aria-label="Открыть меню"
        >
          <Icon name="burger" size={24} />
        </button>
      </Container>
      <dialog
        ref={dialogRef}
        className={styles.mobileDialog}
        tabIndex={-1}
        onClick={handleDialogClick}
        onKeyDown={handleKeyDown}
      >
        <button
          className={styles.closeButton}
          onClick={closeMenu}
          aria-label="Закрыть меню"
        >
          <Icon name="close" size={24} />
        </button>
        {mobileMenuNav}
      </dialog>
    </header>
  );
}
