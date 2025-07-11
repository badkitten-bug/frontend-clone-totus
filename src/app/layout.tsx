import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import CategoryMenu from '../components/CategoryMenu';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Tottus Clone',
  description: 'E-commerce inspirado en Tottus',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <CategoryMenu />
        <main style={{ minHeight: '70vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
