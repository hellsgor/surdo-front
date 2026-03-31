import type { Advantage } from '../components/Advantage';
import type { ColoredText } from '../primitives/ColoredText';
import type { Link } from '../primitives/Link';

export interface About {
  title: ColoredText;
  topText: string | null;
  bottomText: string | null;
  button: Link;
  advantages: Advantage[];
}
