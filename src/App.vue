<template>
  <div>
    <h1>Ürünler</h1>
    <div class="button-group">
      <button @click="setGridColumn(2)">2 Kolon</button>
      <button @click="setGridColumn(3)">3 Kolon</button>
      <button @click="setGridColumn(4)">4 Kolon</button>
    </div>
    <button @click="fetchProducts">Verileri Çek</button>
    <div class="urun-grid">
      <TheUrun v-for="product in products" :key="product.urunKodu" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductsStore } from 'stores/products';
import TheUrun from 'src/components/TheUrun.vue';

const productsStore = useProductsStore();
const products = ref(productsStore.products);
const gridColumn = ref<number>(3); // TS için tip belirtimi ekledik

const fetchProducts = async () => {
  await productsStore.fetchProducts();
  products.value = productsStore.products;
};

const setGridColumn = (columnCount: number) => {
  gridColumn.value = columnCount;
  console.log('Column count set to:', columnCount);
};

onMounted(() => {
  fetchProducts();
});
</script>

<style scoped>
.urun-grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-column, 3), 1fr);
  gap: 1px;
}

.button-group {
  margin-bottom: 10px;
}
</style>
