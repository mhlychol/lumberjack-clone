<script setup lang="ts">
import { defineProps,ref } from 'vue';
import { useProductStore } from 'stores/products';

 //const selectedRenkIndex = ref(0); // Başlangıçta seçili olan renk index'i
 const lastSelectedRenkIndex1 = ref(0);
 import { useRouter} from 'vue-router';

const props = defineProps(['product']);
const calculateIndirimliFiyat = (fiyat, indirimOrani) => {
  // İndirim varsa yeni fiyatı hesapla
  if (indirimOrani !== 0) {
    const indirimliFiyat = fiyat - (fiyat * indirimOrani) / 100;
    return indirimliFiyat.toFixed(2); // İki ondalık basamaklı olarak göster
  }
  // İndirim yoksa mevcut fiyatı geri döndür
  return fiyat;
};
const getStyleForEskiFiyat = (indirimOrani) => {
  // Eğer indirim oranı 0 değilse belirtilen stil özelliklerini uygula
  return indirimOrani !== 0
    ? {
        color: 'rgb(136, 136, 136)',
        'text-decoration': 'line-through',
      }
    : {};

};


const getImgUrl = (product: { urunKodu: string; renk: string[] }): string => {
  return `src/assets/${product.urunKodu}${product.renk[lastSelectedRenkIndex1.value]}1.webp`;
};

const getRenkImgUrl = (urunKodu: string, renk: string): string => {
  return `src/assets/${urunKodu}${renk}1.webp`;
};

const handleMouseOver = (index: number): void => {
  lastSelectedRenkIndex1.value = index;
  console.log(`Mouse over: ${index}`);
};
const router = useRouter();
const productStore = useProductStore();

const handleImageClick = function() {

  const selectedProduct = props.product;
  const selectedRenkIndex = props.product.renk[lastSelectedRenkIndex1.value];
console.log(selectedProduct),
console.log(selectedRenkIndex),
productStore.setSelectedProduct(selectedProduct);
productStore.setSelectedRenk(selectedRenkIndex);

router.push('/Urundetay');


};

</script>

<template>
  <div class="mainconteiner">
    <div class="ickonteyner">
      <div class="resimconteiner">
        <div class="resimustukupon">
          <img src="assets/kupon.webp" alt="">
        </div>
        <div class="resimurun" @click="handleImageClick()">
          <img class="imgresim" :src="getImgUrl(product)" >
        </div>
      </div>
      <div class="kargoindirimdurum">
        <div class="indirimdurum"  v-if="product.indirimOrani > 0">
          -{{ product.indirimOrani }}%
        </div>
        <div class="kargodurum" v-if="product.kargo === 'Ücretsiz'">
          Kargo Bedava
        </div>
      </div>
      <div class="model">
        {{ product.urunAciklamasi }}
      </div>
      <div class="fiyat">
        <div class="fiyatyazi" v-if="product.indirimOrani > 0">
          Son 30 Günün En Düşük Fiyatı
        </div>
        <div class="eskisonfiyat">
          <div class="eskifiyat" :style="getStyleForEskiFiyat(product.indirimOrani)">
            {{ product.fiyat }}TL
          </div>
          <div class="sonfiyat" v-if="product.indirimOrani !== 0">
            {{ calculateIndirimliFiyat(product.fiyat, product.indirimOrani) }}TL

          </div>
        </div>
        <div class="ucuncufiyat" />
      </div>
      <div class="renkresimler">
        <div v-for="(renk, index) in product.renk" :key="index" class="renkresimconteiner">
          <Button class="renkresim" @mouseover="handleMouseOver(index)" @click="handleImageClick()">
            <img class="icresim" :src="getRenkImgUrl(product.urunKodu, renk)" alt="">
          </Button>
          <div class="seciliitem" :style="{ visibility: index === lastSelectedRenkIndex1 ? 'visible' : 'hidden' }" />
        </div>
      </div>
    </div>

    </div>
</template>

<style>
.mainconteiner {
  margin: 20px;
  height: auto;
  border: 1px solid rgb(208, 208, 208);
  font-family: sans-serif;
  padding: 0px;
  border-radius: 0%;
}

.ickonteyner {
  display: flex;
  flex-direction: column;
  padding-left: 5%;

}

.resimconteiner {

  width: 100%;
}
.resimurun{
  width: 100%;
}
.icresim{
  width: 100%;
}
.imgresim {
  height: 100%;
  width: 100%;
}

.resimustukupon {
  position: absolute;
  height: 50px;
  width: 100px;
  padding: 15px 0 0 5px;
}

.kargoindirimdurum {
  display: flex;
  flex-direction: row;
  height: 25px;
  font-size: 12px;
}

.indirimdurum {
  color: white;
  background-color: black;
  height: 20px;
  margin-right: 5px;
  padding: 0 5px 0 5px;

}

.kargodurum {
  color: rgb(0, 0, 0);
  background-color: rgb(232, 232, 232);
  height: 20px;
  padding: 0 5px 0 5px;

}

.model {
  height: auto;
  padding: 0 10px 0 0;
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 1;
}

.fiyat {
  display: flex;
  flex-direction: column;
  letter-spacing: 1px;
}

.fiyatyazi {
  font-size: 12px;
  letter-spacing: 1px;
}

.eskisonfiyat {
  display: flex;
  flex-direction: row;
  font-size: 15px;

}

.eskifiyat {
  color: rgb(0, 0, 0);
  padding-right: 10px;
  font-size: 15px;

}

.sonfiyat {
  color: red;

}

.ucuncufiyat {
  height: 20px;
}

.renkresimler {
  display: flex;
  flex-direction: row;
  margin: 5px 15px 5px 0;
}

.renkresimconteiner {
  width: 45px;
  height: 100px;
  margin-right: 5px;
}

.renkresim {
  height: 70px;
    width: 45px;
    padding: 0px
}

.seciliitem {
  height: 3px;
  background-color: black;
  margin: 5px 0 25px 0;

}
</style>
