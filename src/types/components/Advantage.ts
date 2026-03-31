import type { Image } from '../primitives/Image';

export interface Advantage {
  id: string;
  value: string | null;
  label: string | null;
  image: Image | null;
}
