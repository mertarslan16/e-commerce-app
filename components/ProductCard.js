'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './Cart/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Ürün resmi - sabit boyut ve daha iyi hizalama */}
      <div className="relative aspect-square bg-white dark:bg-gray-900 p-4">
        <Link href={`/products/${product.id}`}>
          <div className="w-full h-full relative">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ 
                objectFit: 'contain',
                padding: '0.5rem'
              }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
        </Link>
      </div>

      {/* Ürün bilgileri */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Kategori */}
        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Başlık */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-medium text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Açıklama (kısaltılmış) */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          {/* Fiyat - daha belirgin */}
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            {product.price.toFixed(2)} TL
          </p>

          {/* Sepete ekle butonu - daha çekici */}
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            aria-label="Sepete Ekle"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;