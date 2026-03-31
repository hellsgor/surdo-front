import type { Bullet } from '../primitives/Bullet';
import type { ColoredText } from '../primitives/ColoredText';
import type { Image } from '../primitives/Image';
import type { Link } from '../primitives/Link';

export interface Hero {
  title: ColoredText;
  bullets: Bullet[];
  primaryButton: Link;
  secondaryButton?: Link;
  image: Image | null;
}
