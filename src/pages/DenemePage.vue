<template>
  <div>
    <h2>Ürün Listesi</h2>
    <input v-model="searchTerm" placeholder="Ürün Ara" />
    <button @click="searchProducts">Ara</button>
    <ul>
      <li v-for="urun in filteredUrunler" :key="urun.urunKodu">
        {{ urun.urunKodu }} - {{ urun.urunAciklamasi }} - {{urun.sezon }}
      </li>
    </ul>
  </div>
  <button @click="filterProducts">Filtrele</button>

</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useProductStore } from 'stores/products';

export default defineComponent({
  setup() {
    const productStore = useProductStore();
    const searchTerm = ref('');
    const filteredUrunler = ref([]);

    const searchProducts = () => {
      productStore.searchProducts(searchTerm.value);
      filteredUrunler.value = productStore.filteredProducts;
    };

    onMounted(async () => {
      await productStore.fetchProducts();
      filteredUrunler.value = productStore.products;
    });
    const yas = 'Çocuk';
    const cinsiyet = 'Kadın';
    const ustTur = null;
    const altTur =null ;

    const filterProducts = () => {

      productStore.applyFilter(yas, cinsiyet,ustTur,altTur);
      filteredUrunler.value = productStore.filteredProducts;

    };
    return {
      searchTerm,
      searchProducts,
      filterProducts,
      filteredUrunler,
    };
  },
});
</script>
