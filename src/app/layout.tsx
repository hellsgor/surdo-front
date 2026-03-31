import type { Metadata } from 'next';
import { Marmelad, PT_Sans } from 'next/font/google';
import '@/scss/globals.scss';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${marmelad.variable} ${ptSans.variable}`}>
      <body>
        <main style={{ flex: 1 }}>{children}</main>
      </body>
    </html>
  );
}
