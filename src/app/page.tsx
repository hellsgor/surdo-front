import { Hero } from '@/components/widgets/Hero/Hero';
import { Tasks } from '@/components/widgets/Tasks/Tasks';
import { getMainPageData } from '@/services/graphql/getters/getMainPageData';

export default async function Home() {
  const { homePage } = await getMainPageData();

  return (
    <>
      <Hero data={homePage.hero} />
      <Tasks data={homePage.tasks} />
    </>
  );
}
