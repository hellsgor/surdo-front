import type { Image, ImageRaw } from '@/types/primitives/Image';
import { toAbsoluteUrl } from '@/config/strapi';

export function mapImage(raw: ImageRaw | null): Image | null {
  if (!raw) return null;
  return {
    desktop: toAbsoluteUrl(raw.desktop?.url),
    mobile: toAbsoluteUrl(raw.mobile?.url),
    alt: raw.alt,
  };
}
