'use client';

import { useEffect, useRef } from 'react';

import clsx from 'clsx';

import styles from './ExpandableHitArea.module.scss';

type Props = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

export function ExpandableHitArea({ onClick, children, className }: Props) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateExtend = () => {
      if (!anchorRef.current || !areaRef.current) return;
      const extend = Math.max(
        0,
        window.innerWidth - anchorRef.current.getBoundingClientRect().right,
      );
      areaRef.current.style.setProperty('--hit-extend', `${extend}px`);
    };

    updateExtend();
    window.addEventListener('resize', updateExtend);
    return () => window.removeEventListener('resize', updateExtend);
  }, []);

  return (
    <>
      <span ref={anchorRef} className={styles.anchor} aria-hidden="true" />
      <div
        ref={areaRef}
        className={clsx(styles.hitArea, className)}
        onClick={onClick}
      >
        {children}
      </div>
    </>
  );
}
