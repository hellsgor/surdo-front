import type { Dimple } from '@/types/components/Dimple';
import type { MainPage } from '@/types/MainPage';

import { client } from '../client';
import type { MainPageQuery } from '../generated/graphql';
import { mapDimple } from '../mappers/mapDimple';
import { type MainPageRaw, mapMainPageData } from '../mappers/mapMainPageData';
import mainPageQuery from '../queries/mainPage';

export async function getMainPageData(): Promise<{
  homePage: MainPage;
  dimples: Dimple[];
}> {
  const data = await client<MainPageQuery>(mainPageQuery);
  const dimples = (data.dimples_connection?.nodes ?? [])
    .map(mapDimple)
    .sort((a, b) => a.sort - b.sort);
  return {
    homePage: mapMainPageData(data.homePage as MainPageRaw),
    dimples,
  };
}
