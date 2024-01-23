<template>
  <div>
    <div class="button-group">
      <button @click="setGridColumn(2)">2 Kolon</button>
      <button @click="setGridColumn(3)">3 Kolon</button>
      <button @click="setGridColumn(4)">4 Kolon</button>
    </div>
    <div>
      <p>{{ $route.query.yas }}/{{ $route.query.cinsiyet }}/ {{ $route.query.ustTur }}/{{ $route.query.altTur }}</p>
    </div>
    <button @click="fetchProducts">Verileri Çek</button>
    <div class="urun-grid" :style="{ gridTemplateColumns: `repeat(${gridColumn}, 1fr)` }">
      <TheUrun v-for="product in filteredProducts" :key="product.urunKodu" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductsStore } from 'stores/products';
import TheUrun from 'src/components/TheUrun.vue';
import { useRoute } from 'vue-router';

const productsStore = useProductsStore();
const products = ref(productsStore.products);
const gridColumn = ref<number>(3);
const filteredProducts = ref(productsStore.products);

const setGridColumn = (columns: number) => {
  gridColumn.value = columns;
};

const applyFilter = () => {
  const { yas, cinsiyet, ustTur, altTur } = useRoute().query;
  // Store'u kullanarak filtreleme işlemini gerçekleştir
  filteredProducts.value = productsStore.applyFilter(yas, cinsiyet, ustTur, altTur);
  fetchProducts();

};

const fetchProducts = async () => {
  await productsStore.fetchProducts();
  products.value = productsStore.products;
  // Update filteredProducts as well
  applyFilter(); // Reapply the filters after fetching new products
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.urun-grid {
  display: grid;
  gap: 1px;
}

.button-group {
  margin-bottom: 10px;
}
</style>
