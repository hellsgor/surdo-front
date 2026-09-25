import clsx from 'clsx';

import { Button, Section } from '@/components/ui';
import type { Reviews } from '@/types/widgets/Reviews';
import { pretty } from '@/utils/typography';

import styles from './Reviews.module.scss';
import { ReviewsCarousel } from './components/ReviewsCarousel/ReviewsCarousel';

type Props = {
  className?: string;
  data: Reviews;
};

export function Reviews({ data: { title, profi, items }, className }: Props) {
  return (
    <Section sectionName="reviews" className={clsx(styles.section, className)}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 dangerouslySetInnerHTML={{ __html: pretty(title) }} />
          <Button {...profi} variant="ghost-orange">
            {profi.label}
          </Button>
        </header>
        <ReviewsCarousel items={items} reviewClassName={styles.review} />
      </div>
    </Section>
  );
}
