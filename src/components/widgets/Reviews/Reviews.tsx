import clsx from 'clsx';

import { Button, RichText, Section } from '@/components/ui';
import type { Reviews } from '@/types/widgets/Reviews';
import { pretty } from '@/utils/typography';

import styles from './Reviews.module.scss';
import { ReviewsCarousel } from './components/ReviewsCarousel/ReviewsCarousel';

type Props = {
  className?: string;
  data: Reviews;
};

export function Reviews({ data: { title, profi, items }, className }: Props) {
  // markdown рендерится здесь, на сервере: react-markdown не должен попадать
  // в клиентский бандл ReviewsCarousel/Review
  const preparedItems = items.map((review) => ({
    review,
    content: review.text ? <RichText>{review.text}</RichText> : null,
  }));

  return (
    <Section sectionName="reviews" className={clsx(styles.section, className)}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h2 dangerouslySetInnerHTML={{ __html: pretty(title) }} />
          <Button {...profi} variant="ghost-orange">
            {profi.label}
          </Button>
        </header>
        <ReviewsCarousel
          items={preparedItems}
          reviewClassName={styles.review}
        />
      </div>
    </Section>
  );
}
