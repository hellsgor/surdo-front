import type { ColoredText } from '../primitives/ColoredText';
import type { Image } from '../primitives/Image';
import type { Link } from '../primitives/Link';

export interface Cta {
  image: Image | null;
  text: string | null;
  tgLink: Link;
  vkLink: Link;
  title: ColoredText;
}
