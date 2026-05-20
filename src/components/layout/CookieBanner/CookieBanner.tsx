'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui';

import styles from './CookieBanner.module.scss';

const COOKIE_NAME = 'cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

function hasConsent(): boolean {
  return document.cookie.split(';').some((c) => c.trim().startsWith(`${COOKIE_NAME}=`));
}

function setConsent() {
  document.cookie = `${COOKIE_NAME}=1; max-age=${COOKIE_MAX_AGE}; path=/; SameSite=Lax`;
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hasConsent()) return;
    const timer = setTimeout(() => setOpen(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  function handleAccept() {
    setConsent();
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div role="region" aria-label="Согласие на использование cookie" className={styles.banner}>
      <p className={styles.text}>
        Мы используем файлы cookie, чтобы сайт работал корректно.
      </p>
      <Button variant="primary" size="sm" onClick={handleAccept} className={styles.button}>
        Хорошо
      </Button>
    </div>
  );
}
