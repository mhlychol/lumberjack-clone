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
    filterProducts(filterOptions: { yas?: string; cinsiyet?: string; ustTur?: string; altTur?: string }) {
      // Filtreleme seçeneklerine göre ürünleri filtrele
      this.filteredProducts = this.products.filter(product => {
        return (
          (!filterOptions.yas || product.yas === filterOptions.yas) &&
          (!filterOptions.cinsiyet || product.cinsiyet === filterOptions.cinsiyet) &&
          (!filterOptions.ustTur || product.ustTur === filterOptions.ustTur) &&
          (!filterOptions.altTur || product.altTur === filterOptions.altTur)
        );
      });
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
