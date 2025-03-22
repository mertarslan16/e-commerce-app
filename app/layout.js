import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import { CartProvider } from '../components/Cart/CartContext';
import CartSidebar from '@/components/Cart/CartSlider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'E-Ticaret Uygulaması',
  description: 'Next.js ve Tailwind CSS ile oluşturulmuş e-ticaret uygulaması',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <CartProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <CartSidebar />
          <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="mb-4 md:mb-0">&copy; 2025 E-Ticaret. Tüm hakları saklıdır.</p>
                <div className="flex space-x-4">
                  <a href="#" className="hover:text-blue-300">Hakkımızda</a>
                  <a href="#" className="hover:text-blue-300">Gizlilik Politikası</a>
                  <a href="#" className="hover:text-blue-300">İletişim</a>
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}