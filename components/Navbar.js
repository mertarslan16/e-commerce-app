'use client';

import Link from 'next/link';
import { useCart } from './Cart/CartContext';
import { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const { cartItems, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sepetteki toplam ürün sayısı
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo ve ana menü */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-bold text-xl">
                E-Ticaret
              </Link>
            </div>

            {/* Masaüstü menü */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
                Ana Sayfa
              </Link>
              <Link href="/products" className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors">
                Ürünler
              </Link>
            </div>
          </div>

          {/* Sağ taraftaki butonlar */}
          <div className="flex items-center">
            {/* Sepet butonu - geliştirilmiş animasyon ve görünüm */}
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
              aria-label="Sepet"
            >
              <FaShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform bg-red-600 rounded-full ring-2 ring-white dark:ring-gray-800 animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Mobil menü butonu */}
            <div className="md:hidden ml-2">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label="Ana Menü"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobil menü - geliştirilmiş animasyon ve tasarım */}
      <div 
        className={`md:hidden bg-gray-800 pb-3 px-4 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-1">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-3 py-2 rounded-md hover:bg-gray-700 transition-colors"
          >
            Ürünler
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;