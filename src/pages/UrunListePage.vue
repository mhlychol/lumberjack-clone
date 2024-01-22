<template>
  <div>
    <h1>Ürünler</h1>
    <div class="button-group">
      <button @click="applyFilter('cinsiyet', 'Erkek')">Erkek Ürünleri</button>
      <button @click="applyFilter('cinsiyet', 'Kadın')">Kadın Ürünleri</button>
      <button @click="applyFilter('ustTur', 'T-shirt')">T-Shirt'ler</button>
      <!-- Add more buttons for different ustTur values -->
    </div>
    <div class="button-group">
      <button @click="setGridColumn(2)">2 Kolon</button>
      <button @click="setGridColumn(3)">3 Kolon</button>
      <button @click="setGridColumn(4)">4 Kolon</button>
    </div>
    <button @click="fetchProducts">Verileri Çek</button>
    <div class="urun-grid" :style="{ gridTemplateColumns: `repeat(${gridColumn}, 1fr)` }">
      <!-- Use the filteredProducts array to display filtered products -->
      <TheUrun v-for="product in filteredProducts" :key="product.urunKodu" :product="product" />
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
const filteredProducts = ref(productsStore.products); // Initialize with all products

const setGridColumn = (columns: number) => {
  gridColumn.value = columns;
};

const fetchProducts = async () => {
  await productsStore.fetchProducts();
  products.value = productsStore.products;
  // Update filteredProducts as well
  applyFilter(); // Reapply the filters after fetching new products
};

const applyFilter = (property?: string, value?: string) => {
  if (property && value) {
    // Apply the filter based on property and value
    filteredProducts.value = products.value.filter(product => product[property] === value);
  } else {
    // If no filter criteria provided, show all products
    filteredProducts.value = products.value;
  }
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
