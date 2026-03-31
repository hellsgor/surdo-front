import type { FaqItem } from '../components/FaqItem';
import type { ColoredText } from '../primitives/ColoredText';

export interface Faq {
  title: ColoredText;
  faqItems: FaqItem[];
}
