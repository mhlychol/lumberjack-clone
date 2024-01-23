// src/stores/products.ts
import { defineStore } from 'pinia';
import apiClient from 'src/services/AxiosPiniaService';

interface Product {
  urunKodu: string;
  urunAciklamasi: string;
  ustTur: string;
  altTur: string;
  marka: string;
  model: string;
  yas: string;
  cinsiyet: string;
  bedenler: string[];
  renk: string[];
  fiyat: number;
  indirimOrani: number;
  kargo: string;
  kuponindirimbilgi: string[];
}

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    filteredProducts: [] as Product[],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await apiClient.get<{ ürünler: Product[] }>('/urunler.json');
        this.products = response.data.ürünler;
        this.filteredProducts = [...this.products];
      } catch (error) {
        console.error('Hata:', error);
      }
    },
    applyFilter(yas, cinsiyet, ustTur, altTur) {
      // Tüm ürünlerle başla
      let filteredProductsCopy = [...this.products];

      // Filtreleri sırayla uygula
      if (cinsiyet) {
        if (cinsiyet === 'Erkek' || cinsiyet === 'Kadın') {
          // Eğer cinsiyet "Erkek" veya "Kadın" ise, hem kendi cinsiyetini hem de "Unisex" olanları göster
          filteredProductsCopy = filteredProductsCopy.filter(product =>
            product['cinsiyet'] === cinsiyet || product['cinsiyet'] === 'Unisex'
          );
        } else {
          // Diğer durumlar için normal filtreleme
          filteredProductsCopy = filteredProductsCopy.filter(product => product['cinsiyet'] === cinsiyet);
        }
      }
      if (yas) {
        filteredProductsCopy = filteredProductsCopy.filter(product => product['yas'] == yas);
      }
      if (altTur) {
        filteredProductsCopy = filteredProductsCopy.filter(product => product['altTur'] === altTur);
      }
      if (ustTur) {
        filteredProductsCopy = filteredProductsCopy.filter(product => product['ustTur'] === ustTur);
      }

      // Eğer hiçbir filtre uymuyorsa veya filtre sonucunda hiç ürün yoksa, tüm ürünleri göster
      if (!filteredProductsCopy.length) {
        filteredProductsCopy = [...this.products];
      }

      // Sonuçla filteredProducts'ı güncelle
      this.filteredProducts = filteredProductsCopy.length > 0 ? filteredProductsCopy : [];

      // Döndürülen değerleri belirt
      return this.filteredProducts;
    },
    setProductByCode(urunKodu: string) {
      // Ürün koduna göre eşleşen ürünü bul ve sakla
      const selectedProduct = this.products.find(product => product.urunKodu === urunKodu);
      if (selectedProduct) {
        this.filteredProducts = [selectedProduct];
      } else {
        // Ürün bulunamazsa, filteredProducts'i boşaltabilir veya başka bir işlem yapabilirsiniz.
        this.filteredProducts = [];
      }
    },
  },
});
export const useProductStore2 = defineStore('Product', {
  state: () => ({
    selectedProduct: {
      urunKodu: '',
      renk: '',
    },
  }),

  actions: {
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
  },
});
