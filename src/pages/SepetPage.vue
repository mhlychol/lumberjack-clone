<template>
  <div>
    <h1>Ürün Detay Sayfası</h1>
    <p>Ürün Kodu: {{ urunKodu }}</p>
    <p>Renk: {{ renk }}</p>
    <p>Beden: {{ beden }}</p>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      urunKodu: '',
      renk: '',
      beden: '',
    };
  },
  mounted() {
    // Query parametrelerini al
    this.urunKodu = this.$route.query.urunKodu || '';
    this.renk = this.$route.query.renk || '';
    this.beden = this.$route.query.beden || '';
  },
};
</script>

<style scoped>
/* Stil kuralları buraya eklenebilir */
</style>
