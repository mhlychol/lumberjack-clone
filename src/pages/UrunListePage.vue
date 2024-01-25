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
    <button @click="applyFilter">filtrele</button>

    <div class="urun-grid" :style="{ gridTemplateColumns: `repeat(${gridColumn}, 1fr)` }">
      <TheUrun v-for="product in filteredProducts" :key="product.urunKodu" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useProductStore } from 'stores/products';
import TheUrun from 'src/components/TheUrun.vue';
import { useRoute } from 'vue-router';

const productStore = useProductStore();
const products = ref(productStore.products);
const gridColumn = ref<number>(3);
const filteredProducts = ref(productStore.products);

const setGridColumn = (columns: number) => {
  gridColumn.value = columns;
};
const yas = useRoute().query.yas || null;
const cinsiyet = useRoute().query.cinsiyet|| null ;
const ustTur = useRoute().query.ustTur || null;
const altTur = useRoute().query.altTur|| null;

const applyFilter = () => {

  productStore.applyFilter(yas, cinsiyet, ustTur, altTur);
  filteredProducts.value = productStore.filteredProducts;
  console.log(yas, cinsiyet, ustTur, altTur)
};

const fetchProducts = async () => {
  await productStore.fetchProducts();
  products.value = productStore.products;
  // Update filteredProducts as well
};

onMounted(() => {
  fetchProducts();
  applyFilter();
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
