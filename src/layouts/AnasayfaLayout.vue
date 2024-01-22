<template>
  <TheUstbar/>
     <router-view to="/"/> <!---->
  <TheFooter/>
</template>
<script setup lang="ts">
import TheFooter from 'src/components/TheFooter.vue';
import TheUstbar from 'src/components/TheUstbar.vue';



</script>
