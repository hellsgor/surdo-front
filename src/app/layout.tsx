import type { Metadata } from 'next';

import { Marmelad, PT_Sans } from 'next/font/google';

import { CtaWidget, Footer, Header } from '@/components/layout';
import { IconsSprite, ModalProvider } from '@/components/ui';
import '@/scss/globals.scss';
import { getGlobalData } from '@/services/graphql/getters/getGlobalData';

const marmelad = Marmelad({
  weight: '400',
  variable: '--font-marmelad',
  subsets: ['cyrillic'],
});

const ptSans = PT_Sans({
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: {
    template: '%s – Полина Сторчевая',
    default: 'Сурдопедагог и логопед – Полина Сторчевая',
  },
  description:
    'Логопед и сурдопедагог Полина Сторчевая — помощь детям с нарушением слуха, алалией, ЗРР, дисграфией. Занятия онлайн и в Самаре.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { globalData } = await getGlobalData();

  return (
    <html lang="ru" className={`${marmelad.variable} ${ptSans.variable}`}>
      <body>
        <IconsSprite />
        <ModalProvider>
          <Header menuItems={globalData.menuItems} />
          <main>{children}</main>
          <CtaWidget cta={globalData.cta} />
          <Footer footer={globalData.footer} />
        </ModalProvider>
      </body>
    </html>
  );
}
