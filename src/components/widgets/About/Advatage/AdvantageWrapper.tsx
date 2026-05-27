'use client';

import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import styles from './Advantage.module.scss';

type Props = { children: React.ReactNode; className?: string; column?: number };

const TABLET_QUERY = '(min-width: 768px) and (max-width: 1439px)';
const TAB_STAGGER = 25; // % — насколько правая колонка "глубже" в скроле

function getRootMargin(column: number | undefined): string {
  if (
    typeof window !== 'undefined' &&
    column === 1 &&
    window.matchMedia(TABLET_QUERY).matches
  ) {
    // Правая колонка: срабатывает позже — нижний край должен подняться
    // на TAB_STAGGER% выше центра (= требует больше скрола)
    return `-${50 - TAB_STAGGER}% 0px -${50 + TAB_STAGGER}% 0px`;
  }
  return '-50% 0px -50% 0px';
}

export function AdvantageWrapper({ children, className, column }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else if (
          entry.rootBounds &&
          entry.boundingClientRect.top > entry.rootBounds.bottom
        ) {
          setIsActive(false);
        }
      },
      { rootMargin: getRootMargin(column) },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [column]);

  return (
    <div
      ref={ref}
      className={clsx(styles.advantage, isActive && styles.active, className)}
    >
      {children}
    </div>
  );
}
