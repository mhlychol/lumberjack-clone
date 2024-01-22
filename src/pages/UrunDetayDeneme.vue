<template>
  <div>
    <h2>Ürün Detay Deneme</h2>
    <div v-if="selectedProduct">
      <h3>{{ selectedProduct.urunKodu }}</h3>
      <p>marka: {{ selectedProduct.marka }}</p>
      <p>Model: {{ selectedProduct.model }}</p>
      <p>urunAciklamasi: {{ selectedProduct.urunAciklamasi }}</p>


      <!-- Diğer ürün detayı bilgilerini buraya ekleyebilirsiniz -->
    </div>
    <div v-else>
      <p>Seçili ürün bulunamadı.</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Gerekirse stil ekleyebilirsiniz */
</style>
