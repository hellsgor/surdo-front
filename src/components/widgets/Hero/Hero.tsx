import { Section } from '@/components/ui/Section/Section';
import type { Hero } from '@/types/widgets/Hero';
import styles from './Hero.module.scss';
import clsx from 'clsx';
import { pretty } from '@/utils/typography';
import { Button } from '@/components/ui';
import Image from 'next/image';

type Props = { data: Hero };

export function Hero({ data }: Props) {
  console.log(data);

  return (
    <Section className={clsx(styles.section)}>
      <Image
        className={styles.bg}
        src="/hero/hero-bg.webp"
        alt="background image"
        width="1982"
        height="930"
      />

      <div className={styles.wrapper}>
        <div className={styles.column}>
          <h1>{pretty(data.title)}</h1>
          <ul role="marked">
            {data.bullets.map((b) => (
              <li key={b.id}>{b.text}</li>
            ))}
          </ul>
          <Button {...data.primaryButton}>{data.primaryButton.label}</Button>
        </div>

        {data.image?.desktop && (
          <div className={styles.protoWrapper}>
            <Image
              className={styles.photo}
              src={data.image.desktop}
              alt={data.image.alt ?? ''}
              width={552}
              height={829}
            />
            <div className={styles.circle}>
              <Image
                className={styles.roundedPhoto}
                src={data.image.desktop}
                alt={data.image.alt ?? ''}
                width={552}
                height={829}
              />
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
