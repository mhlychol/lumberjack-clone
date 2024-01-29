<script lang="ts">


export default {
  props: {
    urun: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showRenkBeden: false,
    };
  },
  methods: {
    toggleRenkBeden() {
      this.showRenkBeden = !this.showRenkBeden;
    },
    getRenkImgUrl(urunKodu, renk) {
      return `src/assets/${urunKodu}${renk}1.webp`;
    },
  },
};


</script>

<template>
  <div class="mainconteinerurun">
    <div class="resim">
      <img class="resimic"  :src="getRenkImgUrl(urun.urunKodu, urun.renk)" >
    </div>
    <div class="bilgiler">
      <!-- <div class="markamodel"/> -->
      <div class="detay">
        {{urun.urunAciklamasi}} <button class="detaybuton" @click="toggleRenkBeden">
          <i class="fas fa-angle-down" />
        </button>
      </div>
      <div v-if="showRenkBeden" class="renkbedenconteiner">
        <div class="renkbeden">
          renk:
        </div>
        <div class="renkbedenicerik">
          {{urun.renk}}
        </div>
        <div class="renkbeden">
          beden
        </div>
        <div class="renkbedenicerik">
          {{urun.beden}}

        </div>
      </div>
      <div class="fiyat">
        {{urun.fiyat}} TL
      </div>
      <div class="adetbeden">
        ADET: {{urun.adet}} BEDEN: {{urun.beden}}
      </div>
    </div>
    <div class="urunusil">
      <i class="far fa-trash-alt" />
    </div>
  </div>
</template>

<style>
.mainconteinerurun {
    background-color: rgb(255, 255, 255);
    width: 100%;
    display: flex;
    font-family: poppins, sans-serif;
    letter-spacing: 1px;
    height: auto;
    color: #333333;
    font-size: 12px;
}

.resim {
    width: 30%;
}
.resimic {
    width: 100%;
}
.bilgiler {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 0 15px 15px 15px;

}

.markamodel {
    white-space: normal;
    line-height: 1;
    padding-bottom: 10px
}

.detay {
    padding-bottom: 5px;
}

.fiyat {
    padding-bottom: 10px;
    font-size: 15px;
}

.renkbedenconteiner {
    display: flex;
    flex-direction: column;
    padding: 15px 0 15px 0;
}

.renkbeden {
    color: #333333;
    font-size: 10px;
    padding: 5px 0 0 0;

}

.renkbedenicerik {
    color: black;
    padding: 5px 0 0 0;
    font-size: 12px;
}
.urunusil{
  width: 10%;
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  padding-top: 15px;
}
.detaybuton{
  border: none;
  background-color: transparent
}
</style>
