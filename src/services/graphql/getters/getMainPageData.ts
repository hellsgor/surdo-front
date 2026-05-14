import type { MainPage } from '@/types/MainPage';

import { client } from '../client';
import { type MainPageRaw, mapMainPageData } from '../mappers/mapMainPageData';
import mainPageQuery from '../queries/mainPage';

export async function getMainPageData(): Promise<{ homePage: MainPage }> {
  const { homePage } = await client<{ homePage: MainPageRaw }>(mainPageQuery);
  return { homePage: mapMainPageData(homePage) };
}
