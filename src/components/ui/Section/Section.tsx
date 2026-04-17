import { Container } from '@/components/layout';
import type { ReactNode } from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';

export function Section({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx(styles.section, className)}>
      <Container>{children}</Container>
    </section>
  );
}
