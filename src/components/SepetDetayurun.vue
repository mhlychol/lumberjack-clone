<script lang="ts">
import { useSepetStore } from 'stores/sepet';
import { ref } from 'vue';
const sepetStore = useSepetStore();
const sepetUrunler = sepetStore.sepetUrunleri;
export default {

  props: {
    urun: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      productCount: ref(this.urun.adet),
    };
  },
  methods: {
    urunsartirazalt(operator, urun) {
      if (operator === '+') {
        this.productCount++;
      } else if (operator === '-' && this.productCount > 0) {
        this.productCount--;
      }
      // sepete ekleme cikarma yapcm burda
      urun.adet = this.productCount;
      console.log(urun.adet)
    },
    callUrunSilme(urunkodu: string, renk: string, beden: string, adet: number) {

      sepetStore.urunSil({ urunKodu: urunkodu, renk: renk, beden: beden, adet: adet });
    }
  },
  setup() {
    const getDeliveryDate = (): string => {
      const currentDate = new Date();
      const deliveryDate3 = new Date(currentDate);
      deliveryDate3.setDate(currentDate.getDate() + 1);

      const deliveryDate6 = new Date(currentDate);
      deliveryDate6.setDate(currentDate.getDate() + 2);

      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
      };

      const formattedDate3 = deliveryDate3.toLocaleDateString('tr-TR', options);
      const formattedDate6 = deliveryDate6.toLocaleDateString('tr-TR', options);

      return `${formattedDate3.slice(0, 2)} - ${formattedDate6}`;
    };


    const getStyleForEskiFiyat = (indirimOrani) => {
      return indirimOrani !== 0
        ? {
          color: 'rgb(136, 136, 136)',
          'text-decoration': 'line-through',
          'font-size': '12',
          'font-weight': '400',
        }
        : {};

    };


    const calculateIndirimliFiyat = (fiyat, indirimOrani) => {
      // İndirim varsa yeni fiyatı hesapla
      if (indirimOrani !== 0) {
        const indirimliFiyat = fiyat - (fiyat * indirimOrani) / 100;
        return indirimliFiyat.toFixed(2); // İki ondalık basamaklı olarak göster
      }
      // İndirim yoksa mevcut fiyatı geri döndür
      return fiyat;
    };
    const toplamAdetHesapla = () => {
      const toplam = sepetUrunler.reduce((acc, urun) => acc + urun.adet, 0);
      const basamaklar = toplam.toString().split('').map(Number);
      const toplamson = basamaklar.reduce((acc, curr) => acc + curr, 0);
      return toplamson;
    };

    const toplamfiyatHesapla = () => {
      const toplamson = sepetUrunler.reduce((acc, urun) => acc + (urun.fiyat * urun.adet), 0);
      return toplamson;
    };

    return {
      sepetUrunler,
      toplamson: toplamAdetHesapla(),
      totalfiyat: toplamfiyatHesapla(),
      calculateIndirimliFiyat,
      getDeliveryDate,
      getStyleForEskiFiyat,
    };

  }

}
</script>
<template>
  <div class="siparisozetconteiner">
    <div class="siparisozet">
      <div class="urunozet">
        <div class="urunresmi">
          <img src="assets/griesofman1.webp" alt="">
        </div>
        <div class="urunbilgi">
          <div class="urunmarka">
            <p>Lumberjack</p>
          </div>
          <div class="urunyazi">
            {{ urun.urunAciklamasi }}
          </div>
          <div class="urunkargosure">
            <div class="urunkargosuresol">
              Tahmini Kargoya Teslimat :
            </div>
            <div class="urunkargosuresag">
              {{ getDeliveryDate() }}
            </div>
          </div>
        </div>
      </div>
      <div class="beden">
        <div class="bedensol">
          Beden:
        </div>
        <div class="bedensag">
          {{ urun.beden }}
        </div>
      </div>
      <div class="urunsayiconteiner">
        <div class="urunsayicerceve">
          <div class="urunsayibuton">
            <button class="butonstyleadet" @click="urunsartirazalt('-', urun)" v-show="productCount > 1">-</button>
          </div>
          <div class="urunsayi">
            {{ productCount }}
          </div>
          <div class="urunsayibuton">
            <button class="butonstyleadet" @click="urunsartirazalt('+', urun)">+</button>
          </div>
        </div>
      </div>
      <div class="urunfiyat">
        <div class="urunfiyateski" :style="getStyleForEskiFiyat(urun.indirimOrani)">
          {{ urun.fiyat }}TL
        </div>
        <div class="urunfiyatyeni" v-if="urun.indirimOrani > 0">
          {{ calculateIndirimliFiyat(urun.fiyat, urun.indirimOrani) }}TL
        </div>
      </div>
      <div class="silbutonconteiner" @click="callUrunSilme(urun.urunKodu, urun.renk, urun.beden, urun.adet)">
        <div class="silbuton">
          <button class="silbutonbuton">
            Sil <i class="fa-solid fa-trash-can" style="color: #bababa;" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.butonstyleadet {
  border: none;
  background-color: transparent;
}

.silbutonbuton:hover,
.butonstyleadet:hover {
  cursor: pointer;
}

.silbutonbuton {
  border: none;
  background-color: transparent;
}

.siparisozetconteiner {

  display: flex;
  flex-direction: column;
  width: auto;
}

.siparisozet {
  display: flex;
  flex-direction: row;
  height: 120px;
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.urunozet {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  align-items: center;
}

.urunresmi {
  width: 20%;
  height: 100%;
}

.urunresmi img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

}

.urunbilgi {
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 60%;
  align-items: center;
  padding-left: 10px;

}

.urunmarka {
  display: flex;
  height: 33%;
  width: 100%;
  margin-bottom: 2px;
  font-weight: 800;
}

.urunyazi {
  display: flex;
  height: 33%;
  width: 100%;
  overflow: hidden;
  font-size: 12px;
  text-decoration-color: black;
  color: rgb(167, 167, 167);
}

.urunyazi a {
  color: rgb(167, 167, 167);
}

.urunkargosure {
  display: flex;
  height: 33%;
  width: 100%;
  font-size: 12px;
  flex-direction: row;
  align-items: center;
}

.urunkargosuresol {
  display: flex;
  width: 70%;
  color: green;
  letter-spacing: 1px;
}

.urunkargosuresag {
  display: flex;
  width: 40%;
  color: rgb(110, 110, 110);
  font-size: 13px;
  font-family: sans-serif;
  font-weight: 500;
}

.beden {
  display: flex;
  flex-direction: row;
  width: 20%;
  height: 20px;
  justify-content: center;
  align-items: center;
  font-size: 13px;
}

.bedensol {
  color: rgb(167, 167, 167);
  font-weight: 500;
  text-align: justify;
  transform: scaleX(1.15);
  margin-right: 5px;
}

.bedensag {
  font-weight: 400;
}

.urunsayiconteiner {
  display: flex;
  flex-direction: row;
  width: 20%;
  height: 50px;
  align-items: center;
  padding-left: 25px;

}

.urunsayicerceve {
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 85px;
  border: 1px solid rgb(206, 206, 206);
  font-size: 16px;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;



}

.urunsayi {
  font-style: sans-serif;
  width: 20px;
}

.urunsayibuton {
  float: right;
  font-size: 18px;
  justify-content: center;
  width: 20px;
}

.urunfiyat {
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  text-align: justify;

}

.urunfiyateski {
  color: rgb(0, 0, 0);
  font-weight: 700;

}

.urunfiyatyeni {
  font-size: 15px;
  font-weight: 700;
}

.silbutonconteiner {
  display: flex;
  flex-direction: row;
  width: 8%;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: rgb(167, 167, 167);
  padding-left: 2px;
}
</style>
