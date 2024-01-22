<script lang="ts">
export default {
  props: {
    selectedProduct: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
   <div v-if="selectedProduct">
      <h3>{{ selectedProduct.urunKodu }}</h3>
      <p>marka: {{ selectedProduct.marka }}</p>
      <p>Model: {{ selectedProduct.model }}</p>
      <p>urunAciklamasi: {{ selectedProduct.urunAciklamasi }}</p>
    </div>
  <div class="Urundetayconteiner">
    <div class="Urunconteiner">
      <div class="resimler">
        <div class="item">
          <img class="itemimg" src="/src/assets/griesofman1.webp" alt="">
        </div>
        <div class="item">
          <img class="itemimg" src="/src/assets/griesofman2.webp" alt="">
        </div>
        <div class="item">
          <img class="itemimg" src="/src/assets/griesofman3.webp" alt="">
        </div>
        <div class="item">
          <img class="itemimg" src="src/assets/griesofman4.webp" alt="">
        </div>
        <div class="item" />
        <div class="item" />
      </div>
      <div class="Urundetaybilgiler">
        <div class="model">

        </div>
        <div class="Urundetaykargoindirimdurum">
          <div class="Urundetayindirimdurum">
            -%
          </div>
          <div class="Urundetaykargodurum">
            Kargo Bedava
          </div>
        </div>
        <div class="Urundetaykuponsezon">
          <div class="Urundetaykupon">
            <img src="assets/kupon.webp" alt="">
          </div>
          <div class="Urundetaysezon">
            <img src="assets/yeni-sezon.webp" alt="">
          </div>
        </div>
        <div class="Urundetayeskisonfiyat">
          <div class="Urundetayeskifiyat">
            449,99 TL
          </div>
          <div class="Urundetaysonfiyat">
            359,99 TL
          </div>
        </div>
        <div class="renk">
          <div class="renkyazi">
            Renk:
          </div>
          <div class="renkrenk">
            Gri
          </div>
        </div>
        <div class="Urundetayrenkresimler">
          <div class="Urundetayrenkresimconteiner">
            <Button class="Urundetayrenkresim">
              <img class="itemimg" src="src/assets/griesofman1.webp" alt="">
            </Button>
            <div class="Urundetayseciliitem" />
          </div>
          <div class="Urundetayrenkresimconteiner">
            <Button class="Urundetayrenkresim">
              <img class="itemimg" src="src/assets/siyahesofman3.webp" alt="">
            </Button>
            <div class="Urundetayseciliitem" style="visibility: hidden;" />
          </div>
          <div class="Urundetayrenkresimconteiner">
            <Button class="Urundetayrenkresim">
              <img class="itemimg" src="src/assets/bejesofman1.webp" alt="">
            </Button>
            <div class="Urundetayseciliitem" style="visibility: hidden;" />
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
            <div class="Urundetaybeden">
              S
            </div>
            <div class="Urundetaybeden" style="border-color: black; color: black;">
              M
            </div>
            <div class="Urundetaybeden">
              L
            </div>
            <div class="Urundetaybeden">
              XL
            </div>
            <div class="Urundetaybeden">
              2XL
            </div>
          </div>

          <div class="Urundetaykargosure">
            <i class="fa-solid fa-truck" />
            <div class="Urundetaykargosureyazi">
              Tahmini Kargoya Teslimat : 13 - 14 Aralık
            </div>
          </div>
          <button class="Urundetaysepetekle">
            SEPETE EKLE
          </button>
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
    /* 3 sütun */
    grid-gap: 10px;
    /* Sütun ve satırlar arası boşluk */
    padding: 0 15px 0 15px;
  max-width: 66%;
}

.item {
    color: #fff;
    text-align: center;
}
.itemimg{
  max-width: 100%;
}
.Urundetaybilgiler {
    display: flex;
    flex-direction: column;
    width: 33%;
    padding: 0 0 0 15px;

}

.model {
    font-family: sans-serif;
    font-size: 16px;
    margin: 0 0 5px 0;

}

.Urundetaykargoindirimdurum {
    display: flex;
    flex-direction: row;
    margin: 5px 0 5px 0;

}

.Urundetayindirimdurum {
    color: white;
    background-color: black;
    height: 25px;
    margin-right: 5px;
    padding: 0 5px 0 5px;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
}

.Urundetaykargodurum {
    color: rgb(0, 0, 0);
    background-color: rgb(232, 232, 232);
    height: 25px;
    padding: 0 5px 0 5px;
    align-items: center;

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
    color: rgb(136, 136, 136);
    text-decoration: line-through;
    padding-right: 10px;
}

.Urundetaysonfiyat {
    color: red;

}

.renk {
    display: flex;
    flex-direction: row;
    font-size: 16px;
    padding-top: 10px;

}

.renkyazi {
    color: rgb(136, 136, 136);
    padding-right: 5px;
}

.renkrenk {
    color: black;
    font-weight: 700;
}

.Urundetayrenkresimler {
    display: flex;
    flex-direction: row;
    margin: 5px 15px 5px 0;
}

.Urundetayrenkresimconteiner {
    width: 45px;
    height: 100px;
    margin-right: 5px;
}

.Urundetayrenkresim {
    height: 60px;
    width: 45px;
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
}

.Urundetayyazi {
    color: rgb(136, 136, 136);

}

.Urundetaytablo {
    text-decoration: underline;
    color: rgb(0, 0, 0);

    font-size: 12px;

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
    width: 40px;
    border: solid 1px rgb(136, 136, 136);
    margin: 5px;
    color: rgb(136, 136, 136);
}
.Urundetaykargosure{
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

.Urundetaykargosureyazi  {
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 10px;
    padding-left: 15px;
    letter-spacing: 1px;
}
.Urundetaysepetekle{
    display: flex;
    align-items: center;
    background-color: black;
    color: white;
    margin: 10px 0 10px 0;
    height: 40px;
    font-size:16px;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    justify-content: center;
}
.Urundetayfavekle{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

}
.Urundetayfavekleyazi{
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 16px;
    padding-left: 5px;
    letter-spacing: 1px;
    font-weight: 400;
}
</style>
