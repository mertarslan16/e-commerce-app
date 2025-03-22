import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Tüm ürünleri getir
export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Ürünler alınırken hata oluştu:', error);
    return [];
  }
};

// Belirli bir ürünü ID'ye göre getir
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`ID: ${id} olan ürün alınırken hata oluştu:`, error);
    return null;
  }
};

// Ürünleri kategoriye göre getir
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Kategori: ${category} ürünleri alınırken hata oluştu:`, error);
    return [];
  }
};

// Tüm kategorileri getir
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Kategoriler alınırken hata oluştu:', error);
    return [];
  }
};