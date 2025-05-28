import Footer from '@/shared/Footer/Footer';
import Header from '@/shared/Header/Header';
import '../styles/globals.css';
import { Manrope } from 'next/font/google'

const getManrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700']
})
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={getManrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
