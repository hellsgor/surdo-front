'use client';

import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { Button, useModal } from '@/components/ui';
import type { Review } from '@/types/components/Review';
import { pluralize } from '@/utils/typography';

import styles from './Review.module.scss';

type Props = {
  className?: string;
  review: Review;
  expanded?: boolean;
};

export function Review({ className, review, expanded = false }: Props) {
  const { name, age, text, tags } = review;
  const { openModal } = useModal();
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (expanded || !el) return;

    const measure = () => setIsTruncated(el.scrollHeight > el.clientHeight + 1);

    const observer = new ResizeObserver(measure);
    observer.observe(el);

    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) measure();
    });

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [expanded]);

  return (
    <div className={clsx(styles.review, className)}>
      <header className={styles.header}>
        <h5>
          <span className={styles.name}>{name}</span>
          {age !== null && `, ${pluralize(age, 'год', 'года', 'лет')}`}
        </h5>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <Button key={tag.id} variant="chip" disabled>
              {tag.text}
            </Button>
          ))}
        </div>
      </header>
      <p ref={textRef} className={clsx(!expanded && styles.clamped)}>
        {text}
      </p>
      {!expanded && isTruncated && (
        <Button
          variant="ghost-orange"
          className={styles.readMore}
          onClick={() =>
            openModal(<Review review={review} expanded />, `Отзыв: ${name}`)
          }
        >
          Читать полностью
        </Button>
      )}
    </div>
  );
}
