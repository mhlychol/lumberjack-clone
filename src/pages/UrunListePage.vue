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
      <!-- Use the filteredProducts array to display filtered products -->
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
const gridColumn = ref<number>(3); // TS için tip belirtimi ekledik
const filteredProducts = ref(productsStore.products); // Initialize with all products

const setGridColumn = (columns: number) => {
  gridColumn.value = columns;
};

const fetchProducts = async () => {
  await productsStore.fetchProducts();
  products.value = productsStore.products;
  // Update filteredProducts as well
   // Reapply the filters after fetching new products
};

const applyFilter = () => {
  const { yas, cinsiyet, ustTur, altTur } = useRoute().query;

  // Tüm ürünlerle başla
  let filteredProductsCopy = [...products.value];

  // Filtreleri sırayla uygula
  if (cinsiyet) {
    if (cinsiyet === 'Erkek' || cinsiyet === 'Kadın') {
      // Eğer cinsiyet "Erkek" veya "Kadın" ise, hem kendi cinsiyetini hem de "Unisex" olanları göster
      filteredProductsCopy = filteredProductsCopy.filter(product =>
        product['cinsiyet'] === cinsiyet || product['cinsiyet'] === 'Unisex'
      );
    } else {
      // Diğer durumlar için normal filtreleme
      filteredProductsCopy = filteredProductsCopy.filter(product => product['cinsiyet'] === cinsiyet);
    }
  }
  if (yas) {
    filteredProductsCopy = filteredProductsCopy.filter(product => product['yas'] == yas);
  }
  if (altTur) {
    filteredProductsCopy = filteredProductsCopy.filter(product => product['altTur'] === altTur);
  }
  if (ustTur) {
    filteredProductsCopy = filteredProductsCopy.filter(product => product['ustTur'] === ustTur);
  }

  // Eğer hiçbir filtre uymuyorsa veya filtre sonucunda hiç ürün yoksa, tüm ürünleri göster
  if (!filteredProductsCopy.length) {
    filteredProductsCopy = [...products.value];
  }

  // Sonuçla filteredProducts'ı güncelle
  filteredProducts.value = filteredProductsCopy.length > 0 ? filteredProductsCopy : [];

  console.log('Ürünler:', products.value);
  console.log('Filtreler:', { cinsiyet, yas, altTur, ustTur });
  console.log('Filtrelenmiş Ürünler:', filteredProductsCopy);
};
onMounted(() => {
  applyFilter();
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
