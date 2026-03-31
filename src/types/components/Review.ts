import type { Tag } from '../primitives/Tag';

export interface Review {
  id: string;
  name: string;
  age: number | null;
  showOnMainPage: boolean | null;
  text: string | null;
  order: number;
  tags: Tag[];
}
