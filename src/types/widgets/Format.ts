import type { FormatItem } from '../components/FormatItem';
import type { ColoredText } from '../primitives/ColoredText';

export interface Format {
  title: ColoredText;
  items: FormatItem[];
}
