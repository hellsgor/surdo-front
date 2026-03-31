import type { ServicePageCard } from '../components/ServicePageCard';
import type { ColoredText } from '../primitives/ColoredText';

export interface Tasks {
  title: ColoredText;
  text: string | null;
  servicePages: ServicePageCard[];
}
