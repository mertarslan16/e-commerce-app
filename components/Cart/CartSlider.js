'use client';

import { useCart } from './CartContext';
import { FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';

const CartSidebar = () => {
  const { cartItems, isOpen, toggleCart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - arka plan için karartma */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
        onClick={toggleCart}
      />

      {/* Sidebar - daha iyi görünüm */}
      <div className={`cart-sidebar ${isOpen ? 'slide-in' : 'slide-out'}`}>
        <div className="sticky top-0 bg-white dark:bg-gray-800 z-10 p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">Sepetim</h2>
          <button
            onClick={toggleCart}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Sepeti Kapat"
          >
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-8 text-center">
            <div className="mx-auto w-20 h-20 text-gray-300 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <p className="text-gray-500 dark:text-gray-400">Sepetiniz boş</p>
            <button 
              onClick={toggleCart}
              className="mt-4 text-blue-600 dark:text-blue-400 hover:underline"
            >
              Alışverişe devam et
            </button>
          </div>
        ) : (
          <>
            <div className="divide-y dark:divide-gray-700">
              {cartItems.map((item) => (
                <div key={item.id} className="py-4 px-4 flex flex-col">
                  <div className="flex space-x-4">
                    {/* Ürün resmi - daha iyi görünüm */}
                    <div className="flex-shrink-0 w-20 h-20 bg-white dark:bg-gray-700 rounded-md overflow-hidden relative border border-gray-200 dark:border-gray-600 p-1">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="80px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>

                    {/* Ürün bilgileri */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-sm font-medium line-clamp-2 dark:text-white">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.price.toFixed(2)} TL</p>
                      
                      {/* Miktar kontrolü ve silme - daha iyi düzen */}
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center border rounded dark:border-gray-600 overflow-hidden">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.id, item.quantity - 1);
                              }
                            }}
                            className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus className="h-3 w-3" />
                          </button>
                          <span className="px-3 py-1 bg-white dark:bg-gray-800 border-x dark:border-gray-600">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <FaPlus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 p-1"
                          aria-label="Ürünü Sepetten Çıkar"
                        >
                          <FaTrash className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Ürün toplamı */}
                  <div className="mt-2 text-right">
                    <p className="text-sm font-medium dark:text-white">
                      Toplam: {(item.price * item.quantity).toFixed(2)} TL
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sepet alt kısmı - daha iyi görünüm ve daha çekici butonlar */}
            <div className="sticky bottom-0 border-t dark:border-gray-700 p-4 bg-white dark:bg-gray-800 shadow-md">
              <div className="flex justify-between mb-2">
                <span className="font-medium dark:text-gray-300">Ara toplam:</span>
                <span className="dark:text-white">{total.toFixed(2)} TL</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="font-medium dark:text-gray-300">Toplam:</span>
                <span className="font-bold text-lg dark:text-white">{total.toFixed(2)} TL</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors dark:text-white"
                >
                  Sepeti Boşalt
                </button>
                <button
                  onClick={() => alert('Ödeme sayfasına yönlendiriliyorsunuz...')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Ödeme Yap
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartSidebar;