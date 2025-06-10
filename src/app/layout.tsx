import Footer from '@/shared/Footer/Footer';
import Header from '@/shared/Header/Header';
import '../styles/globals.css';
import { Barlow, Barlow_Condensed, Barlow_Semi_Condensed } from 'next/font/google';
import LiveChatButton from '@/shared/LiveChat/LiveChat';

const barlow = Barlow({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  variable: '--font-barlow',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${barlow.variable} ${barlowCondensed.variable} ${barlowSemiCondensed.variable}`}
    >
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Seu limite é nosso ponto de partida. Soluções reais para negócios reais."
        />
        <meta
          name="keywords"
          content="negócios, soluções, serviços, consultoria, inovação, tecnologia, desenvolvimento"
        />
        <meta name="author" content="Imptus" />
        <title>Imptus - Consultoria Digital</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <LiveChatButton />
      </body>
    </html>
  );
}
