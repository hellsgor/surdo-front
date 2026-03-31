import type { GlobalData } from '@/types/GlobalData';
import { client } from '../client';
import { mapGlobalData, type GlobalDataRaw } from '../mappers/mapGlobalData';
import globalDataQuery from '../queries/globalData';

export async function getGlobalData(): Promise<{ globalData: GlobalData }> {
  const data = await client<GlobalDataRaw>(globalDataQuery, {
    filters: { parent: { documentId: { null: true } } },
  });
  return { globalData: mapGlobalData(data) };
}
