import { Hero } from '@/components/widgets/Hero/Hero';
import { getMainPageData } from '@/services/graphql/getters/getMainPageData';

export default async function Home() {
  const { homePage } = await getMainPageData();

  return (
    <>
      <Hero data={homePage.hero} />
    </>
  );
}
