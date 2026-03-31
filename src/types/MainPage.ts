import type { About } from './widgets/About';
import type { Faq } from './widgets/Faq';
import type { Format } from './widgets/Format';
import type { Hero } from './widgets/Hero';
import type { Reviews } from './widgets/Reviews';
import type { Tasks } from './widgets/Tasks';

export interface MainPage {
  hero: Hero;
  tasks: Tasks;
  about: About;
  reviews: Reviews;
  classesFormat: Format;
  faq: Faq;
}
