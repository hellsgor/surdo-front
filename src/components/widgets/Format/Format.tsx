import { Section } from '@/components/ui';
import type { Format as FormatType } from '@/types/widgets/Format';
import { pretty } from '@/utils/typography';

import styles from './Format.module.scss';
import { FormatItem } from './FormatItem/FormatItem';

type Props = {
  data: FormatType;
};

export function Format({ data: { title, items } }: Props) {
  return (
    <Section sectionName="format">
      <div className={styles.wrapper}>
        <h2 dangerouslySetInnerHTML={{ __html: pretty(title) }} />
        <div className={styles.grid}>
          {items.map((item) => (
            <FormatItem key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Section>
  );
}
