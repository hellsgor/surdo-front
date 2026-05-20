import type { Dimple } from '@/types/components/Dimple';
import type { DimplesQuery } from '../generated/graphql';
import { mapImage } from './mapImage';

type DimpleRaw = NonNullable<DimplesQuery['dimples_connection']>['nodes'][number];

export function mapDimple(raw: DimpleRaw): Dimple {
  return {
    id: raw.documentId,
    title: raw.Title ?? null,
    sort: raw.Sort,
    image: mapImage(raw.Image ?? null),
  };
}
