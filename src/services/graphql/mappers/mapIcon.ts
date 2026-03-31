import type { Icon } from '@/types/primitives/Icon';
import type { UploadFile } from '../generated/graphql';
import { toAbsoluteUrl } from '@/config/strapi';

type IconRaw = Pick<UploadFile, 'url' | 'alternativeText'>;

export function mapIcon(raw: IconRaw): Icon {
  return {
    url: toAbsoluteUrl(raw.url)!,
    alt: raw.alternativeText ?? null,
  };
}
