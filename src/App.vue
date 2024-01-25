<template>
<AnasayfaLayout/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import AnasayfaLayout from './layouts/AnasayfaLayout.vue';
import DenemePage from './pages/DenemePage.vue';
//import UrunListePage from './pages/UrunListePage.vue';



onMounted(() => {
  //productsStore.fetchProducts();
});

</script>

