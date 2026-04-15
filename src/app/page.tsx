import { getMainPageData } from '@/services/graphql/getters/getMainPageData';

export default async function Home() {
  const { homePage } = await getMainPageData();

  console.log('homePage:', homePage);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
