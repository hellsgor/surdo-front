import Image from 'next/image';
import type { Cta } from '@/types/widgets/Cta';
import { Button } from '@/components/ui';
import { Container } from '../Container/Container';
import styles from './CtaWidget.module.scss';
import { nobr } from '@/utils/typography';

type Props = {
  cta: Cta;
};

export function CtaWidget({ cta }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.backgrounds} aria-hidden>
        <div className={styles.bg1} />
        <div className={styles.bg3} />
        <div className={styles.bg2} />

        {cta.image?.desktop && (
          <div className={styles.photo}>
            <Image
              src={cta.image.desktop}
              alt={cta.image.alt ?? ''}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1439px) 47vw, 512px"
              quality={90}
            />
          </div>
        )}
      </div>

      <Container className={styles.container}>
        <div className={styles.content}>
          {cta.title.text && <h2>{nobr(cta.title.text)}</h2>}
          {cta.text && <p>{nobr(cta.text)}</p>}
          <div className={styles.buttons}>
            <Button href={cta.tgLink.href} variant="neutral">
              {cta.tgLink.label}
            </Button>
            <Button href={cta.vkLink.href} variant="neutral">
              {cta.vkLink.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
