import { ResponsiveImage } from '@/components/core/Image/Image';
import type { Advantage as AdvantageType } from '@/types/components/Advantage';
import { nobr } from '@/utils/typography';

import { AdvantageWrapper } from './AdvantageWrapper';
import styles from './Advantage.module.scss';

type Props = AdvantageType & { className?: string };

export function Advantage({ value, label, image, className }: Props) {
  return (
    <AdvantageWrapper className={className}>
      <div className={styles.content}>
        <span className={styles.value}>{value}</span>
        <p className={styles.label}>{nobr(label || '')}</p>
      </div>
      <ResponsiveImage image={image} className={styles.image} />
    </AdvantageWrapper>
  );
}
