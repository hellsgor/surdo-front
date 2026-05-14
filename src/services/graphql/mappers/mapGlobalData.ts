import type { GlobalData } from '@/types/GlobalData';

import type { GlobalDataQuery } from '../generated/graphql';
import { mapImage } from './mapImage';

export type GlobalDataRaw = GlobalDataQuery;

const EMPTY_COLORED_TEXT = { text: null, colored: null };
const EMPTY_LINK = { label: '', href: '#', leftText: null, rightText: null };

export function mapGlobalData(raw: GlobalDataRaw): GlobalData {
  return {
    menuItems:
      raw.menuItems_connection?.nodes.map((node) => ({
        title: node.title,
        order: node.order,
        side: node.side ?? '',
        path: node.path ?? '/',
        isDisabled: node.isDisabled ?? false,
        children: node.children.flatMap((child) =>
          child
            ? [
                {
                  path: child.path ?? '/',
                  title: child.title,
                  isDisabled: child.isDisabled ?? false,
                },
              ]
            : [],
        ),
      })) ?? [],
    cta: {
      image: mapImage(raw.cta?.image ?? null),
      text: raw.cta?.text ?? null,
      tgLink: raw.cta?.tgLink ?? EMPTY_LINK,
      vkLink: raw.cta?.vkLink ?? EMPTY_LINK,
      title: raw.cta?.title ?? EMPTY_COLORED_TEXT,
    },
    footer: {
      copyRight: raw.footer?.copyRight ?? null,
      privacy: raw.footer?.privacy ?? EMPTY_LINK,
      createdByWhom: raw.footer?.createdByWhom ?? EMPTY_LINK,
    },
  };
}
