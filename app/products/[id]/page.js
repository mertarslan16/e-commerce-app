'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../components/Cart/CartContext';
import { getProductById } from '../../../lib/api';
import { FaArrowLeft, FaStar, FaShoppingCart } from 'react-icons/fa';

export default function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        
        if (!data) {
          setError('Ürün bulunamadı.');
          return;
        }
        
        setProduct(data);
      } catch (err) {
        setError('Ürün yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      // Ürünü seçilen miktarda sepete ekle
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      // Kullanıcıya bildirim göster
      alert(`${product.title} ürünü sepete eklendi!`);
    }
  };

  // Yıldız derecelendirmesi gösterme
  const renderRating = (rating) => {
    return (
      <div className="flex items-center">
        <div className="flex mr-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`${
                star <= Math.floor(rating)
                  ? 'text-yellow-400'
                  : star <= Math.floor(rating) + 0.5
                  ? 'text-yellow-400 opacity-60'
                  : 'text-gray-300'
              } h-5 w-5`}
            />
          ))}
        </div>
        <span className="text-gray-600 dark:text-gray-400">({rating})</span>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <div className="text-red-500 mb-4 text-5xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-16 w-16 mx-auto">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-lg text-red-500 mb-4">{error || 'Ürün bulunamadı.'}</p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" /> Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Geri dönme linki */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <FaArrowLeft className="mr-2" /> Ürünlere Dön
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Ürün resmi */}
          <div className="flex justify-center items-center p-8 bg-white dark:bg-gray-900 border-b md:border-b-0 md:border-r dark:border-gray-700">
            <div className="relative h-64 sm:h-80 md:h-96 w-full max-w-md">
              <Image
                src={product.image}
                alt={product.title}
                fill
                style={{ objectFit: 'contain' }}
                className="p-4"
              />
            </div>
          </div>

          {/* Ürün bilgileri */}
          <div className="p-6 md:p-8">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 text-xs text-blue-800 bg-blue-100 dark:text-blue-100 dark:bg-blue-900 rounded-full mb-2">
                {product.category}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">{product.title}</h1>
              
              {/* Fiyat bilgisi */}
              <div className="flex flex-wrap items-center justify-between mb-4">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{product.price.toFixed(2)} TL</p>
                {product.rating && (
                  <div className="mt-2 md:mt-0">
                    {renderRating(product.rating.rate)}
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {product.rating.count} değerlendirme
                    </p>
                  </div>
                )}
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4">
                <h3 className="text-lg font-medium mb-2 dark:text-white">Ürün Açıklaması</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{product.description}</p>
              </div>

              {/* Miktar seçimi */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <label htmlFor="quantity" className="block font-medium dark:text-white">
                  Miktar:
                </label>
                <div className="flex border border-gray-300 dark:border-gray-600 rounded overflow-hidden">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-x border-gray-300 dark:border-gray-600 focus:outline-none bg-white dark:bg-gray-800 dark:text-white"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Sepete ekleme butonu */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <FaShoppingCart /> Sepete Ekle
              </button>
              
              {/* Ek bilgiler */}
              <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="dark:text-gray-300">Stokta var</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="dark:text-gray-300">Hızlı teslimat</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  <span className="dark:text-gray-300">Orijinal ürün</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="dark:text-gray-300">Güvenli ödeme</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}