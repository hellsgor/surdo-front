import Link from 'next/link';

import { Icon } from '@/components/ui';
import type { ServicePageCard } from '@/types/components/ServicePageCard';

import styles from './Task.module.scss';

type Props = {
  data: ServicePageCard;
};

export function Task({ data: { title, slug } }: Props) {
  return (
    <div className={styles.task}>
      <Link href={`/${slug}`} className={styles.wrapper}>
        <div className={styles.bg} />
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.more}>
          <span>Подробнее</span>
          <Icon name="arrow-right" size="1em" />
        </div>
      </Link>
    </div>
  );
}
