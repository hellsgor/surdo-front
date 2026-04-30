import { Container } from '@/components/layout';
import type { ReactNode } from 'react';
import styles from './Section.module.scss';
import clsx from 'clsx';

export function Section({
  children,
  className,
  sectionName,
}: {
  children: ReactNode;
  className?: string;
  sectionName: string;
}) {
  return (
    <section
      className={clsx(styles.section, className)}
      data-section-name={sectionName}
    >
      <Container>{children}</Container>
    </section>
  );
}
