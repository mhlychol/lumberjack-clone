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

  },
});
