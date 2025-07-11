import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';
import CategoryMenu from '../components/CategoryMenu';
import Footer from '../components/Footer';
import { CartProvider } from '../components/CartContext';

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
        <CartProvider>
          <Header />
          <CategoryMenu />
          <main style={{ minHeight: '70vh' }}>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
