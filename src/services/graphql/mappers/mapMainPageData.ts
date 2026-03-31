import type { MainPageQuery } from '../generated/graphql';
import type { MainPage } from '@/types/MainPage';
import { mapImage } from './mapImage';
import { mapIcon } from './mapIcon';

export type MainPageRaw = NonNullable<MainPageQuery['homePage']>;

const EMPTY_COLORED_TEXT = { text: null, colored: null };
const EMPTY_LINK = { label: '', href: '#', leftText: null, rightText: null };

export function mapMainPageData(raw: MainPageRaw): MainPage {
  return {
    hero: {
      title: raw.hero?.title ?? EMPTY_COLORED_TEXT,
      bullets: raw.hero?.bullets?.flatMap((b) => b ? [{ id: b.id, text: b.text ?? null }] : []) ?? [],
      image: mapImage(raw.hero?.image ?? null),
      primaryButton: raw.hero?.primaryButton ?? EMPTY_LINK,
      secondaryButton: raw.hero?.secondaryButton ?? undefined,
    },
    tasks: {
      title: raw.tasks?.title ?? EMPTY_COLORED_TEXT,
      text: raw.tasks?.text ?? null,
      servicePages: raw.tasks?.servicePages_connection?.nodes.map((node) => ({
        id: node.documentId,
        title: node.title ?? null,
        slug: node.slug ?? null,
        order: node.order,
      })) ?? [],
    },
    about: {
      title: raw.about?.title ?? EMPTY_COLORED_TEXT,
      topText: raw.about?.topText ?? null,
      bottomText: raw.about?.bottomText ?? null,
      button: raw.about?.button ?? EMPTY_LINK,
      advantages: raw.about?.advantages?.flatMap((adv) => adv ? [{
        id: adv.id,
        value: adv.value ?? null,
        label: adv.label ?? null,
        image: mapImage(adv.image ?? null),
      }] : []) ?? [],
    },
    reviews: {
      title: raw.reviews?.title ?? EMPTY_COLORED_TEXT,
      profi: raw.reviews?.profi ?? EMPTY_LINK,
      items: raw.reviews?.items_connection?.nodes.map((item) => ({
        id: item.documentId,
        name: item.name,
        age: item.age ?? null,
        showOnMainPage: item.showOnMainPage ?? null,
        text: item.text ?? null,
        order: item.order,
        tags: item.reviewsTags_connection?.nodes.map((tag) => ({
          id: tag.documentId,
          text: tag.text,
          value: tag.value,
        })) ?? [],
      })) ?? [],
    },
    classesFormat: {
      title: raw.classesFormat?.title ?? EMPTY_COLORED_TEXT,
      items: raw.classesFormat?.items?.flatMap((item) => item ? [{
        id: item.id,
        title: item.title,
        description: item.description,
        icon: mapIcon(item.icon),
      }] : []) ?? [],
    },
    faq: {
      title: raw.faq?.title ?? EMPTY_COLORED_TEXT,
      faqItems: raw.faq?.faqItems_connection?.nodes.map((node) => ({
        id: node.documentId,
        question: node.question,
        answer: node.answer,
      })) ?? [],
    },
  };
}
