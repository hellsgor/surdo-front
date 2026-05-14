import clsx from 'clsx';

import { toAbsoluteUrl } from '@/config/strapi';
import type { Image as ImageType } from '@/types/primitives/Image';

import styles from './Image.module.scss';

type Props = {
  image: ImageType | null;
  className?: string;
  lazy?: boolean;
};

export function ResponsiveImage({ image, className, lazy = true }: Props) {
  if (!image) return null;

  const desktop = toAbsoluteUrl(image.desktop);
  const mobile = toAbsoluteUrl(image.mobile);
  const alt = image.alt ?? '';

  if (!desktop) return null;

  return (
    <picture className={clsx(styles.image, className)}>
      {mobile && <source srcSet={mobile} media="(max-width: 767px)" />}
      <img src={desktop} alt={alt} loading={lazy ? 'lazy' : 'eager'} />
    </picture>
  );
}
