<template>
  <router-view to="/" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSepetStore } from 'stores/sepet';
import { useProductStore } from 'stores/products';
const productStore = useProductStore();
const sepetStore = useSepetStore();





onMounted(() => {
  productStore.fetchProducts();
  sepetStore.getFirebaseToSepet();
});

</script>

