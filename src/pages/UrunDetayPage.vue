<template>
  <UrunDetay :selectedProduct="selectedProduct" />
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { useProductsStore } from 'stores/products';
import { useRouter } from 'vue-router';
import { useProductStore2 } from 'stores/products';
import UrunDetay from 'components/UrunDetay.vue';

export default {
  setup() {
    const router = useRouter();
    const productsStore = useProductsStore();
    const selectedProductStore = useProductStore2();
    const selectedProduct = ref(null);

    onMounted(() => {
      const urunKodu = Array.isArray(router.currentRoute.value.query.urunKodu)
        ? router.currentRoute.value.query.urunKodu[0]
        : router.currentRoute.value.query.urunKodu;

      if (urunKodu) {
        productsStore.setProductByCode(urunKodu);
        selectedProduct.value = productsStore.filteredProducts[0];
        selectedProductStore.setSelectedProduct(selectedProduct.value);
      }
    });

    return {
      selectedProduct,
    };
  },
  components: { UrunDetay },
};
</script>
