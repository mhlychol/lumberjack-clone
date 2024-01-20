// src/stores/products.ts
import { defineStore } from 'pinia';
import apiClient from 'src/services/AxiosPiniaService';

// Ürünün API'den alınan veri tipini temsil eden interface
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
}

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[], // products state'inin türü olarak Product[] kullanıldı
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await apiClient.get<{ ürünler: Product[] }>('/urunler.json');
        this.products = response.data.ürünler;
      } catch (error) {
        console.error('Hata:', error);
      }
    },
  },
});
