import ProductList from '../components/ProductList';

export const metadata = {
  title: 'E-Ticaret | Ana Sayfa',
  description: 'Next.js ve Tailwind CSS ile oluşturulmuş e-ticaret uygulaması',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300"></div>
          <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-blue-200"></div>
        </div>
        
        <div className="container mx-auto px-s py-20 md:py-12 lg:py-14 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
              Hoş Geldiniz!
            </h1>
            <p className="text-lg md:text-xl mb-10 text-blue-100 leading-relaxed max-w-2xl">
              En yeni ve en popüler ürünler burada. Hemen alışverişe başlayın ve en iyi fırsatları kaçırmayın.
            </p>
            <a 
              href="#products" 
              className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
            >
              Alışverişe Başla
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-3 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold tracking-wide uppercase">
              Ürün Kataloğu
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark:text-white">Ürünlerimiz</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              Kaliteli ve uygun fiyatlı ürünlerimizi keşfedin. Tüm ürünlerimiz orijinal ve garantilidir.
            </p>
          </div>
          <ProductList />
        </div>
      </section>
      
      <section className="py-20 bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Neden Bizi Seçmelisiniz?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Müşteri memnuniyeti bizim için her şeyden önce gelir. Size en iyi alışveriş deneyimini sunmak için buradayız.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Kaliteli Ürünler</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                En kaliteli ve güvenilir ürünleri sizlere sunuyoruz. Her ürün titizlikle seçilir ve kontrol edilir.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Hızlı Teslimat</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Siparişleriniz en kısa sürede kapınıza teslim edilir. Hızlı ve güvenli teslimat garantisi veriyoruz.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Güvenli Ödeme</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ödeme işlemleriniz tamamen güvenli bir şekilde gerçekleştirilir. Tüm ödemeleriniz şifrelenir ve korunur.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">İlk Siparişinize Özel %10 İndirim</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hemen alışverişe başlayın ve ilk siparişinizde %10 indirim kazanın!
          </p>
          <a 
            href="#products" 
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-lg"
          >
            Şimdi Alışveriş Yap
          </a>
        </div>
      </section>
    </main>
  );
}