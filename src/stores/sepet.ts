// src/pinia/modules/Sepet.ts
import { defineStore } from 'pinia';

export const useSepetStore = defineStore('sepet', {
  state: () => ({
    sepetUrunler: [],
  }),
  actions: {
    urunEkle(urun) {
      this.sepetUrunler.push(urun);
    },
    urunSil(urun) {
      const index = this.sepetUrunler.findIndex(item => item.Urunkodu === urun.Urunkodu);
      if (index !== -1) {
        this.sepetUrunler.splice(index, 1);
      }
    },
    sepetiTemizle() {
      this.sepetUrunler = [];
    },
  },
  getters: {
    urunSayisi() {
      return this.sepetUrunler.length;
    },
  },
});
