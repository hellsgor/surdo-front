'use client';

import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

import { usePathname } from 'next/navigation';

import clsx from 'clsx';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button, ExpandableHitArea, Icon } from '@/components/ui';
import '@/components/ui/PaginationBullets/PaginationBullets.module.scss';
import type { Review as ReviewType } from '@/types/components/Review';

import { Review } from '../Review/Review';
import styles from './ReviewsCarousel.module.scss';

type Item = {
  review: ReviewType;
  content: ReactNode;
};

type Props = {
  items: Item[];
  className?: string;
  reviewClassName?: string;
};

export function ReviewsCarousel({ items, className, reviewClassName }: Props) {
  const pathname = usePathname();
  const visibleItems = (
    pathname === '/'
      ? items.filter(({ review }) => review.showOnMainPage)
      : items
  ).toSorted((a, b) => a.review.order - b.review.order);

  const swiperRef = useRef<SwiperType | null>(null);
  // useState, а не useRef: swiper-react подхватывает el для кастомной пагинации только при
  // изменении пропа между рендерами, а ref сам по себе повторный рендер не вызывает
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  if (visibleItems.length === 0) return null;

  const hasMultipleItems = visibleItems.length > 1;
  // Swiper не клонирует слайды для loop, а переставляет существующие. На десктопе видно до трёх
  // карточек плюс одна нужна ему в буфере — если отзывов меньше, заполнить ленту нечем
  const canLoop = visibleItems.length >= 4;

  return (
    <div className={styles.carousel}>
      <Swiper
        className={clsx(styles.reviewsCarousel, className)}
        modules={[Pagination, A11y]}
        slidesPerView="auto"
        loop={canLoop}
        rewind={!canLoop}
        // Свой контейнер для точек: дефолтный рендерится внутри .swiper, а он растянут за
        // край экрана (чтобы Swiper правильно посчитал видимые слайды) — точки центрировались
        // бы по этой растянутой ширине, а не по видимой колонке карточек
        pagination={{ el: paginationEl, clickable: true }}
        // scrollOnFocus: false — иначе модуль A11y сам вызывает slideTo() при любом
        // фокусе внутри неактивного слайда, включая программный возврат фокуса на
        // кнопку «Читать полностью» после закрытия модалки — карусель дёргалась
        a11y={{
          paginationBulletMessage: 'Перейти к отзыву {{index}}',
          scrollOnFocus: false,
        }}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
      >
        {visibleItems.map(({ review, content }) => (
          <SwiperSlide key={review.id}>
            <Review
              review={review}
              content={content}
              className={reviewClassName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {hasMultipleItems && (
        <div
          ref={setPaginationEl}
          className={clsx('swiper-pagination', styles.pagination)}
        />
      )}
      <ExpandableHitArea
        className={styles.nextHitArea}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <Button
          variant="primary"
          shape="round"
          aria-label="Следующий отзыв"
          className={styles.nextButtonCircle}
        >
          <Icon name="chevron-right" />
        </Button>
      </ExpandableHitArea>
    </div>
  );
}
