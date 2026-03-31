import type { Review } from '../components/Review';
import type { ColoredText } from '../primitives/ColoredText';
import type { Link } from '../primitives/Link';

export interface Reviews {
  title: ColoredText;
  profi: Link;
  items: Review[];
}
