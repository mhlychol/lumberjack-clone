// src/stores/products.ts
import apiClient from 'src/services/AxiosService';
import { defineStore } from 'pinia';


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
  sezon: string[];
}

interface SepetProduct {
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
  sezon: string[];
}
export const useProductStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    filteredProducts: [] as Product[],
    selectedProduct: null,
    selectedRenk: null,

  }),

  actions: {
    //urunleri dosyadan cek
    setSelectedProduct(product) {
      this.selectedProduct = product;
    },
    setSelectedRenk(renk) {
      this.selectedRenk = renk;
    },
    async fetchProducts() {
      try {
        const response = await apiClient.get<{ ürünler: Product[] }>('/urunler.json');
        this.products = response.data.ürünler;
        this.filteredProducts = [...this.products];
      } catch (error) {
        console.error('Hata:', error);
      }
    },
    searchProducts(searchTerm: string) {
      if (!searchTerm) {
        // If the search term is empty, reset filteredProducts to all products
        this.filteredProducts = [...this.products];
        return;
      }

      // Convert the search term to lowercase for case-insensitive search
      const term = searchTerm.toLowerCase();

      // Filter products based on the search term
      this.filteredProducts = this.products.filter((product) =>
        Object.values(product).some((value) =>
          value && typeof value === 'string' && value.toLowerCase().includes(term)
        )
      );
    },

    applyFilter(yas, cinsiyet, ustTur, altTur) {
      console.log(yas, cinsiyet, ustTur, altTur)

      let filteredList = [...this.products];

      if (yas !== null) {
        filteredList = filteredList.filter(product => product.yas === yas);
      }

      // Check and filter based on 'cinsiyet'
      if (cinsiyet !== null) {
        filteredList = filteredList.filter(product => product.cinsiyet === cinsiyet || product.cinsiyet === 'Unisex');
      }

      // Check and filter based on 'ustTur'
      if (ustTur !== null) {
        filteredList = filteredList.filter(product => product.ustTur === ustTur);
      }

      // Check and filter based on 'altTur'
      if (altTur !== null) {
        filteredList = filteredList.filter(product => product.altTur === altTur);
      }

      // Update the filteredProducts list in the store
      this.filteredProducts = filteredList;
    },


  },
  getters: {
    getSelectedProduct: (state) => state.selectedProduct,
    getSelectedRenk: (state) => state.selectedRenk,

  },
});
