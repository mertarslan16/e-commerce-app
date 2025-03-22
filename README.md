# E-Ticaret Uygulaması - Next.js ve Tailwind CSS

Bu proje, Next.js 14 ve Tailwind CSS kullanılarak geliştirilen modern bir e-ticaret web uygulamasıdır. Fake Store API'den ürün verilerini çeker ve kullanıcılara responsive bir arayüzde alışveriş deneyimi sunar.

![E-Ticaret Uygulaması](https://your-screenshot-url.com)

## 🚀 Özellikler

- **Responsive Tasarım**: Mobil, tablet ve masaüstü ekranlara uyumlu
- **Ürün Listeleme ve Filtreleme**: Kategorilere göre filtreleme ve arama
- **Sepet İşlevselliği**: Ürün ekleme, çıkarma ve miktar güncelleme
- **Sepet Yan Çubuğu**: Kolay erişim için yan çubuk
- **Ürün Detay Sayfası**: Detaylı ürün bilgileri ve satın alma seçenekleri
- **Koyu/Açık Mod Desteği**: Sistem ayarına göre otomatik tema değişimi
- **Yerel Depolama**: Sepet verileri tarayıcıda saklanır

## 🛠️ Teknolojiler

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Fake Store API](https://fakestoreapi.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- Context API (State Yönetimi)

## ⚙️ Kurulum

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/username/e-commerce-app.git
   cd e-commerce-app
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   # veya
   yarn install
   ```

3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine gidin.

## 📁 Proje Yapısı

```
e-commerce-app/
├── app/                    # Next.js App Router
│   ├── layout.js           # Ana layout
│   ├── page.js             # Ana sayfa
│   ├── globals.css         # Global CSS
│   ├── products/           # Ürün sayfaları
│   │   └── [id]/           # Ürün detay sayfası
│   └── cart/               # Sepet sayfası
├── components/             # Bileşenler
│   ├── Navbar.js           # Navigasyon çubuğu
│   ├── ProductCard.js      # Ürün kartı
│   ├── ProductList.js      # Ürün listesi
│   ├── Cart/               # Sepet bileşenleri
│   │   ├── CartItem.js     # Sepet öğesi
│   │   ├── CartSidebar.js  # Sepet yan çubuğu
│   │   └── CartContext.js  # Sepet context
├── lib/                    # Yardımcı işlevler
│   └── api.js              # API işlevleri
├── public/                 # Statik dosyalar
├── next.config.mjs         # Next.js yapılandırması
└── tailwind.config.js      # Tailwind yapılandırması
```

## 🌐 API Entegrasyonu

Bu uygulama [Fake Store API](https://fakestoreapi.com/) kullanır. Bazı temel API istekleri:

- Tüm ürünleri getir: `GET /products`
- Tek ürün getir: `GET /products/{id}`
- Kategorileri getir: `GET /products/categories`
- Kategoriye göre getir: `GET /products/category/{categoryName}`

## 🚀 Dağıtım

Bu projeyi Vercel, Netlify veya herhangi bir statik site barındırma hizmetinde dağıtabilirsiniz:

```bash
# Üretim sürümünü oluşturun
npm run build

# Üretim sürümünü önizleyin
npm start
```

## 🙏 Teşekkürler

- [Fake Store API](https://fakestoreapi.com/)
- [Next.js Takımı](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)