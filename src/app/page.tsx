import { getGlobalData } from '@/services/graphql/getters/getGlobalData';
import { getMainPageData } from '@/services/graphql/getters/getMainPageData';

export default async function Home() {
  const [{ globalData }, { homePage }] = await Promise.all([
    getGlobalData(),
    getMainPageData(),
  ]);

  console.log('globalData:', globalData);
  console.log('homePage:', homePage);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
