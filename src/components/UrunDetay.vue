<script lang="ts">
import { ref, onMounted ,computed } from 'vue';
//import { sepeteEkle, fetchSepetUrunleri } from 'boot/firebase';
import { useProductStore } from 'stores/products';
const productStore = useProductStore();



export default {

  setup() {
    const lastSelectedRenkIndex = ref(0);
    const selectedBedenIndex = ref(3);

    const selectedProduct = computed(() => productStore.getSelectedProduct);
    const selectedRenk = computed(() => productStore.getSelectedRenk);

    const getStyleForEskiFiyat = (indirimOrani: number) => {
      return indirimOrani !== 0
        ? {
          color: 'rgb(136, 136, 136)',
          'text-decoration': 'line-through',
        }
        : {};
    };

    const getDeliveryDate = (): string => {
      const currentDate = new Date();
      const deliveryDate3 = new Date(currentDate);
      deliveryDate3.setDate(currentDate.getDate() + 3);

      const deliveryDate6 = new Date(currentDate);
      deliveryDate6.setDate(currentDate.getDate() + 6);

      const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'long',
      };

      const formattedDate3 = deliveryDate3.toLocaleDateString('tr-TR', options);
      const formattedDate6 = deliveryDate6.toLocaleDateString('tr-TR', options);

      return `${formattedDate3.slice(0, -4)}- ${formattedDate6}`;
    };

    const getRenkImgUrl = (urunKodu: string, renk: string): string => {
      return `src/assets/${urunKodu}${renk}1.webp`;
    };

    const getImgUrl = (urunKodu: string, renk: string, index: number): string => {
      return `src/assets/${urunKodu}${renk}${index}.webp`;
    };

    const handleMouseOver = (index: number): void => {
      lastSelectedRenkIndex.value = index;
    };

    const handleMouseOverbeden = (index: number): void => {
      selectedBedenIndex.value = index;
    };

    const sepeteekle = async (urunKodu: string, renk: string, beden: string): Promise<void> => {
      console.log(urunKodu,renk,beden )
     /* const yeniUrun = {
        Urunkodu: urunKodu,
        beden: beden,
        adet: 1,
        renk: renk,
      };

      try {
       // await sepeteEkle(yeniUrun);
       // await fetchSepetUrunleri();
      } catch (error) {
        console.error('Error adding urun to sepet:', error);
      }*/
    };

    onMounted(() => {
      // fetchSepetUrunleri();

    });

    return {
      lastSelectedRenkIndex,
      selectedBedenIndex,
      getStyleForEskiFiyat,
      getRenkImgUrl,
      handleMouseOver,
      handleMouseOverbeden,
      getImgUrl,
      getDeliveryDate,
      sepeteekle,
      selectedProduct,
      selectedRenk
    };
  },
};
</script>

<template>
  <div class="selectedProduct">

  </div>
  <div class="Urundetayconteiner">
    <div class="Urunconteiner">
      <div class="resimler" id="app">
        <div class="item" v-for="index in 5" :key="index">
          <img class="itemimg"
            :src="getImgUrl(selectedProduct.urunKodu, selectedProduct.renk[lastSelectedRenkIndex], index)" alt="">
        </div>
      </div>
      <div class="Urundetaybilgiler">
        <div class="model1">
          {{ selectedProduct.urunAciklamasi }}
        </div>
        <div class="Urundetaykargoindirimdurum">
          <div class="Urundetayindirimdurum" v-if="selectedProduct.indirimOrani > 0">
            -%{{ selectedProduct.indirimOrani }}
          </div>
          <div class="Urundetaykargodurum" v-if="selectedProduct.kargo === 'Ücretsiz'">
            Kargo Bedava
          </div>
        </div>
        <div class="Urundetaykuponsezon">
          <div class="Urundetaykupon">
            <img src="src/assets/kuponindirimbilgi1.webp" alt="">
          </div>
          <div class="Urundetaysezon">
            <img src="src/assets/kuponindirimbilgi2.webp" alt="">
          </div>
          <div class="Urundetaysezon">
            <img src="src/assets/kuponindirimbilgi3.webp" alt="">
          </div>
        </div>
        <div class="Urundetayeskisonfiyat">
          <div class="Urundetayeskifiyat" :style="getStyleForEskiFiyat(selectedProduct.indirimOrani)">
            {{ selectedProduct.fiyat }} TL </div>
          <div class="Urundetaysonfiyat" v-if="selectedProduct.indirimOrani > 0">
            {{ (selectedProduct.fiyat * ((100 - selectedProduct.indirimOrani) / 100)).toFixed(2) }} TL
          </div>
        </div>
        <div class="renk">
          <div class="renkyazi">
            Renk:
          </div>
          <div class="renkrenk">
            {{ selectedProduct.renk[lastSelectedRenkIndex] }}
          </div>
        </div>
        <div class="Urundetayrenkresimler">

          <div v-for="(renk, index) in selectedProduct.renk" :key="index" class="Urundetayrenkresimconteiner">
            <Button class="Urundetayrenkresim" @click="handleMouseOver(index)">
              <img class="itemimg" :src="getRenkImgUrl(selectedProduct.urunKodu, renk)" alt="">
            </Button>
            <div class="Urundetayseciliitem"
              :style="{ visibility: index === lastSelectedRenkIndex ? 'visible' : 'hidden' }" />
          </div>
        </div>

        <div class="Urundetayalt">
          <div class="Urundetaybedenyazi">
            <div class="Urundetayyazi">
              Beden:
            </div>
            <button class="Urundetaytablo">
              Beden Tablosu
            </button>
          </div>
          <div class="Urundetaybedecesit">
            <div v-for="(beden, index) in selectedProduct.bedenler" :key="index" class="Urundetaybeden"
              @click="handleMouseOverbeden(index)"
              :style="{ backgroundColor: index === selectedBedenIndex ? 'black' : '', color: index === selectedBedenIndex ? 'white' : '' }">
              {{ beden }}
            </div>
          </div>


          <div class="Urundetaykargosure">
            <i class="fa-solid fa-truck" />
            <div class="Urundetaykargosureyazi">
              Tahmini Kargoya Teslimat : {{ getDeliveryDate() }}
            </div>
          </div>
          <button class="Urundetaysepetekle"
            @click="sepeteekle(selectedProduct.urunKodu, selectedProduct.renk[lastSelectedRenkIndex], selectedProduct.bedenler[selectedBedenIndex])">
            SEPETE EKLE
          </button>
          <div class="sepetaltigizli">

          </div>
          <button class="Urundetayfavekle">
            <i class="fa-regular fa-heart" />
            <div class="Urundetayfavekleyazi">
              FAVORİLERIME EKLE
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.selectedProduct {
  height: 55px;
}

.Urundetayconteiner {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.Urunconteiner {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 15px 0 15px;

}

.resimler {
  width: 66%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 0 15px 0 15px;
  max-width: 66%;
}

.item {
  color: #fff;
  text-align: center;
}

.itemimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Urundetaybilgiler {
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 0 0 0 15px;

}

.model1 {
  font-family: sans-serif;
  font-size: 16px;
  margin: 0 0 5px 0;

}

.Urundetaykargoindirimdurum {
  display: flex;
  flex-direction: row;
  margin: 6px 0 5px 0;
}

.Urundetayindirimdurum {
  color: white;
  background-color: black;
  height: 25px;
  margin-right: 8px;
  padding: 0 5px 0 5px;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 15px;
}

.Urundetaykargodurum {
  color: rgb(0, 0, 0);
  background-color: rgb(232, 232, 232);
  height: 18px;
  padding: 0 5px 0 5px;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;


}

.Urundetaykuponsezon {
  display: flex;
  flex-direction: row;
  margin: 5px 0 5px 0;

}

.Urundetaykupon img {
  height: 35px;

}

.Urundetaysezon img {
  height: 35px;
  padding-left: 5px;

}

.Urundetayeskisonfiyat {
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 400;

}

.Urundetayeskifiyat {
  color: rgb(255, 0, 0);
  padding-right: 10px;
}

.Urundetaysonfiyat {
  color: red;

}

.renk {
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 10px 0 10px 0;

}

.renkyazi {
  color: rgb(136, 136, 136);
  padding-right: 5px;
}

.renkrenk {
  color: black;
  font-weight: 600;
  font-size: 16px;
  font-family: Helvetica;
}

.Urundetayrenkresimler {
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
}

.Urundetayrenkresim {
  height: 60px;
  width: 45px;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
}

.Urundetayrenkresimconteiner {
  width: 45px;
  height: 100px;
  margin-right: 5px;
}

.Urundetayrenkresim {
  height: 60px;
  width: 45px;
  padding: 0;
  margin: 0;
}

.Urundetayseciliitem {
  height: 3px;
  background-color: black;
  margin: 0px 0 15px 0;

}

.Urundetayalt {
  display: flex;
  flex-direction: column;
  width: 66%;
}

.Urundetaybedenyazi {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
}

.Urundetayyazi {
  color: rgb(136, 136, 136);

}

.Urundetaytablo {
  text-decoration: underline;
  color: rgb(0, 0, 0);
  border: none;
  font-size: 12px;
  background-color: transparent;
}

.Urundetaybedecesit {
  display: flex;
  flex-direction: row;
}

.Urundetaybeden {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 43px;
  border: solid 1px rgb(136, 136, 136);
  margin: 3px;
  color: rgb(136, 136, 136);
  font-size: 11px;

}

.Urundetaykargosure {
  display: flex;
  flex-direction: row;
  background-color: rgb(236, 236, 236);
  height: 30px;
  padding: 0 0 0 10px;
  align-items: center;
  margin: 20px 0 5px 0;

}

.Urundetaykargosure i {
  display: flex;
  align-items: center;
}

.Urundetaykargosureyazi {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 10px;
  padding-left: 15px;
  letter-spacing: 1px;
}

.Urundetaysepetekle {
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  margin: 10px 0 10px 0;
  height: 40px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  justify-content: center;
}

.Urundetayfavekle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
}

.Urundetayfavekleyazi {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 16px;
  padding-left: 5px;
  letter-spacing: 1px;
  font-weight: 400;
}
</style>
