<!-- UrunSecPage.vue -->
<template>
  <div>
    <h1>Filtreleme Seçenekleri</h1>

    <input type="text" v-model="filterOptions.yas" id="yas" />

    <label for="cinsiyet">Cinsiyet:</label>
    <input type="text" v-model="filterOptions.cinsiyet" id="cinsiyet" />

    <label for="ustTur">Üst Tür:</label>
    <input type="text" v-model="filterOptions.ustTur" id="ustTur" />

    <label for="altTur">Alt Tür:</label>
    <input type="text" v-model="filterOptions.altTur" id="altTur" />

    <button @click="applyFilters">Filtrele</button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const filterOptions = ref({
      yas: '',
      cinsiyet: '',
      ustTur: '',
      altTur: '',
    });

    const router = useRouter();

    const applyFilters = () => {
      // UrunListePage.vue sayfasına filtre seçeneklerini gönder
      router.push({ path: 'Urunler', query: filterOptions.value });
    };

    return {
      filterOptions,
      applyFilters,
    };
  },
};
</script>

<style scoped>
/* İsteğe bağlı: Sayfa stillemeleri */
</style>
