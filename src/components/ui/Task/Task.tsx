import styles from './Task.module.scss';
import type { ServicePageCard } from '@/types/components/ServicePageCard';
import Link from 'next/link';
import { SquareBottomUp } from '@solar-icons/react/ssr';

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
          <SquareBottomUp weight="Linear" size="1em" />
        </div>
      </Link>
    </div>
  );
}
