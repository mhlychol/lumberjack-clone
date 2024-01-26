<!-- SepetComponent.vue -->
<template>
  <div>
    <h2>Sepet</h2>
    <form @submit.prevent="urunEkle">
      <label for="urunKodu">Ürün Kodu:</label>
      <input type="text" v-model="urunKodu" required />

      <label for="beden">Beden:</label>
      <input type="text" v-model="beden" required />

      <label for="adet">Adet:</label>
      <input type="number" v-model="adet" required />

      <label for="renk">Renk:</label>
      <input type="text" v-model="renk" required />

      <button type="submit">Sepete Ürün Ekle</button>
    </form>
    <ul>
      <li v-for="urun in sepetUrunleri" :key="urun.id">
        {{ urun.urunKodu }} - {{ urun.adet }}
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firestore } from 'boot/firebase'; // Firestore bağlantısını import et

const sepetUrunleri = ref([]);
const urunKodu = ref('');
const beden = ref('');
const adet = ref(0);
const renk = ref('');


onMounted(async () => {
  try {
    // Firestore'dan Sepet koleksiyonundaki belgeleri çek
    const sepetCollection = collection(firestore, 'Sepet');
    const querySnapshot = await getDocs(sepetCollection);

    // QuerySnapshot'tan belgeleri al ve sepetUrunleri ref'ine ata
    sepetUrunleri.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Hata:', error);
  }
});
const urunEkle = async () => {
  try {
    const yeniUrun = {
      urunAdi: urunKodu.value,
      beden: beden.value,
      adet: adet.value,
      renk: renk.value
    };

    const sepetCollection = collection(firestore, 'Sepet');
    await addDoc(sepetCollection, yeniUrun);

    // Veri ekledikten sonra input değerlerini sıfırla
    urunKodu.value = '';
    beden.value = '';
    adet.value = 0;
    renk.value = '';
  } catch (error) {
    console.error('Hata:', error);
  }
};
</script>
