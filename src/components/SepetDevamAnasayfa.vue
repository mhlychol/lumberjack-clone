<script lang="ts">
import SepetUrun from 'src/components/SepetUrun.vue';
import { useSepetStore } from 'stores/sepet';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    SepetUrun,
  },
  methods: {

    urunSilme(urunKodu: string, renk: string, beden: string, adet: number): void {
      const sepetStore = useSepetStore();
      sepetStore.urunSil({ urunKodu, renk, beden, adet });
      this.$forceUpdate();
    },
  },
  setup() {
    const sepetStore = useSepetStore();
    const sepetUrunler = sepetStore.sepetUrunleri;
    const router = useRouter();

    onMounted(() => {
      sepetStore.getFirebaseToSepet();
    });

    console.log('sepeturunleri', sepetUrunler.values);

    const toplamAdetHesapla = () => {
      const toplam = sepetUrunler.reduce((acc, urun) => acc + urun.adet, 0);
      const basamaklar = toplam.toString().split('').map(Number);
      const toplamson = basamaklar.reduce((acc, curr) => acc + curr, 0);
      return toplamson;
    };

    const toplamfiyatHesapla = () => {
      const toplamson = sepetUrunler.reduce((acc, urun) => acc + (urun.fiyat * ((100 - urun.indirimOrani) / 100) * urun.adet), 0);
      return parseFloat(toplamson.toFixed(2));
    };

    const redirectToSiparis = () => {
      router.push('/sepet/');
    };


    return {
      sepetUrunler,
      toplamson: toplamAdetHesapla(),
      totalfiyat: toplamfiyatHesapla(),
      redirectToSiparis,
    };
  },


  // other component options...
}
</script>

<template>
  <div class="sepetmainconteiner">

    <div class="urunsayisi">
      {{ toplamson }} Adet ürün sepetinizde ekli
    </div>
    <div class="aratoplam">
      Ara Toplam:{{ totalfiyat }} TL
    </div>
    <div class="sepetbutonconteiner">
      <button class="sepetbuton" @click="redirectToSiparis">
        SEPETE GİT
      </button>
    </div>
    <div style="background-color: gray; height: 1px; margin-bottom: 5px;" />
    <div style="max-height: 300px; overflow-y: auto;">
      <SepetUrun v-for="sepeturun in sepetUrunler" :key="sepeturun.urunKodu" :urun="sepeturun" />
    </div>
    <div style="background-color: gray; height: 1px;" />
  </div>
</template>

<style>
.sepetbuton:hover {

  cursor: pointer;

}

.sepetmainconteiner {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 400px;
  background-color: rgb(255, 255, 255);
  font-family: poppins, sans-serif;
  padding: 20px;
  letter-spacing: 1px;
  border: 2px solid #c2c2c2;
  border-radius: 1%;
}

.urunsayisi,
.aratoplam {
  font-size: 12px;
  color: #333333;
}

.sepetbutonconteiner {
  text-align: center;
  padding: 10px 0 15px 0;
}

.sepetbuton {
  background-color: black;
  width: 100%;
  /* Add margin to center vertically */
  color: white;
  height: 30px;
  font-size: 14px;
}

.urunler {
  display: flex;
  flex-direction: column;
  padding: 5px 0 5px 0;
  max-height: 300px;
  overflow: scroll;
}
</style>
