import type { Image } from '@/types/primitives/Image';

export interface Dimple {
  id: string;
  title: string | null;
  sort: number;
  image: Image | null;
}
