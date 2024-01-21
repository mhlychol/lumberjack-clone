<template>
  <div>
    <h1>Ürünler</h1>
    <div class="button-group">
      <button @click="setGridColumn(2)">2 Kolon</button>
      <button @click="setGridColumn(3)">3 Kolon</button>
      <button @click="setGridColumn(4)">4 Kolon</button>
    </div>
    <button @click="fetchProducts">Verileri Çek</button>
    <div class="urun-grid" :style="{ gridTemplateColumns: `repeat(${gridColumn}, 1fr)` }">
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

const setGridColumn = (columns: number) => {
  gridColumn.value = columns;
};

const fetchProducts = async () => {
  await productsStore.fetchProducts();
  products.value = productsStore.products;
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
