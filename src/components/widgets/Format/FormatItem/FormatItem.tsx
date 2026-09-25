import type { FormatItem as FormatItemType } from '@/types/components/FormatItem';
import { nobr } from '@/utils/typography';

import styles from './FormatItem.module.scss';

type Props = {
  data: FormatItemType;
};

export function FormatItem({ data: { title, description, icon } }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.header}>
        <img className={styles.icon} src={icon.url} alt={icon.alt ?? ''} />
        <h3 className={styles.title}>{nobr(title)}</h3>
      </div>
      <p className={styles.description}>{nobr(description)}</p>
    </div>
  );
}
