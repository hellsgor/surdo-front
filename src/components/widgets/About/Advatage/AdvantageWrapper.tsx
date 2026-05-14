'use client';

import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import styles from './Advantage.module.scss';

type Props = { children: React.ReactNode; className?: string };

export function AdvantageWrapper({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else if (entry.rootBounds && entry.boundingClientRect.top > entry.rootBounds.bottom) {
          setIsActive(false);
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={clsx(styles.advantage, isActive && styles.active, className)}>
      {children}
    </div>
  );
}
