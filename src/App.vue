<template>
<router-view to="/"/>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSepetStore } from 'stores/sepet';
import { useProductStore } from 'stores/products';

const productStore = useProductStore();
const sepetStore = useSepetStore();


import AnasayfaLayout from './layouts/AnasayfaLayout.vue';
import DenemePage from './pages/DenemePage.vue';
import SepetFirebaseDeneme from './pages/SepetFirebaseDeneme.vue';
import TheSepet from './components/TheSepet.vue';
//import UrunListePage from './pages/UrunListePage.vue';
import SepetDetay from './components/SepetDetay.vue';



onMounted(() => {
  productStore.fetchProducts();
  sepetStore.getFirebaseToSepet();
});

</script>

