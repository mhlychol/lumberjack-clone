<template>
  <div>
    <div>
      <p>Sepetinizde {{ toplamAdet }} Urun var</p>
      <p>Urunlerin toplam fiyati {{ totalfiyat }} tl</p>

      <h2>Store İçindeki Veriler</h2>
      <ul>
        <li v-for="(urun, index) in sepetUrunleri" :key="index">
          {{ urun.urunKodu }} - {{ urun.renk }} - {{ urun.beden }} - {{ urun.adet }}
        </li>
      </ul>
    </div>
    <h1>Sepet Ürünleri</h1>
    <ul>
      <li v-for="(urun, index) in sepetUrunleri" :key="index">
        {{ urun.urunKodu }} - {{ urun.renk }} - {{ urun.beden }} - {{ urun.adet }}
        <button @click="urunSil(urun)">Ürünü Sil</button>
      </li>
    </ul>

    <h2>Yeni Ürün Ekle</h2>
    <form @submit.prevent="urunEkle">
      <label>
        Ürün Kodu:
        <input v-model="newUrun.urunKodu" required />
      </label>
      <br />
      <label>
        Renk:
        <input v-model="newUrun.renk" required />
      </label>
      <br />
      <label>
        Beden:
        <input v-model="newUrun.beden" required />
      </label>
      <br />
      <label>
        Adet:
        <input type="number" v-model="newUrun.adet" required />
      </label>
      <label>
        Fiyat:
        <input type="number" v-model="newUrun.fiyat" required />
      </label>
      <br />
      <button type="submit">Ürünü Ekle</button>
    </form>

    <button @click="getFirebaseToSepet">Firebase'den Güncelle</button>
    <button @click="pushStoreToFirebase">Store'u Firebase'a Gönder</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useSepetStore } from 'stores/sepet';

export default defineComponent({
  setup() {
    const sepetStore = useSepetStore();
    const newUrun = ref({
      urunKodu: '',
      urunAciklamasi: '',
      fiyat: 0,
      indirimOrani: 0,
      renk: '',
      beden: '',
      adet: 0,
    });



    const toplamAdetHesapla = () => {

      const toplam = sepetUrunleri.reduce((acc, urun) => acc + urun.adet, 0);
      const basamaklar = toplam.toString().split('').map(Number);


      // Basamakları topla
      const toplamson = basamaklar.reduce((acc, curr) => acc + curr, 0);

      return toplamson;
    };
    const toplamfiyatHesapla = () => {

      const toplam = sepetUrunleri.reduce((acc, urun) => acc + urun.fiyat, 0);
      const basamaklar = toplam.toString().split('').map(Number);
      const totalfiyat = basamaklar.reduce((acc, curr) => acc + curr, 0);

      return totalfiyat;
    };


    const { sepetUrunleri, getFirebaseToSepet, urunEkle, urunSil, pushStoreToFirebase } = sepetStore;

    // Component mount olduğunda Firebase'den verileri çek
    onMounted(() => {
      getFirebaseToSepet();
    });

    return {
      sepetUrunleri,
      newUrun,
      getFirebaseToSepet,
      urunEkle: () => {
        urunEkle(newUrun.value);
        newUrun.value = {
          urunKodu: '',
          urunAciklamasi: '',
          fiyat: 0,
          indirimOrani: 0,
          renk: '',
          beden: '',
          adet: 0,

        };
      },
      urunSil,
      pushStoreToFirebase,
      toplamAdet: toplamAdetHesapla(),
      totalfiyat: toplamfiyatHesapla(),

    };
  },
});
</script>


<!-- SepetComponent.vue
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
</script> -->
