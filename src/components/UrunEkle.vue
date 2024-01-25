<!-- UrunEkle.vue -->

<template>
  <div>
    <h1>Ürün Ekleme Formu</h1>
    <form @submit.prevent="addUrunToSepet">
      <!-- ... input alanları ... -->
      <button type="submit">Ürünü Ekle</button>
    </form>
  </div>
</template>

<script>
import { fbdb } from '@/boot/firebase';

export default {
  data() {
    return {
      urun: {
        urunkodu: '',
        renk: '',
        beden: '',
        adet: 0,
      },
    };
  },
  methods: {
    async addUrunToSepet() {
      try {
        // Sepet koleksiyonuna yeni bir belge ekleyelim
        await fbdb.collection('Sepet').add({
          urunkodu: this.urun.urunkodu,
          renk: this.urun.renk,
          beden: this.urun.beden,
          adet: this.urun.adet,
        });

        // Formu sıfırla
        this.urun = {
          urunkodu: '',
          renk: '',
          beden: '',
          adet: 0,
        };

        console.log('Ürün başarıyla eklendi!');
      } catch (error) {
        console.error('Ürün eklenirken bir hata oluştu:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Stil kuralları buraya eklenebilir */
</style>
