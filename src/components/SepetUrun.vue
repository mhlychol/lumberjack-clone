<script>
export default {
  data() {
    return {
      showRenkBeden: false,
    }
  },
  methods: {
    toggleRenkBeden() {
      this.showRenkBeden = !this.showRenkBeden
    },
  },
}
</script>

<template>
  <div class="mainconteinerurun">
    <div class="resim">
      <img class="resimic" src="/src/assets/minisepetresim.webp">
    </div>
    <div class="bilgiler">
      <div class="markamodel">
        GALIA 3PR Beyaz Erkek Sneaker
      </div>
      <div class="detay">
        Detay <button class="detaybuton" @click="toggleRenkBeden">
          <i class="fas fa-angle-down" />
        </button>
      </div>
      <div v-if="showRenkBeden" class="renkbedenconteiner">
        <div class="renkbeden">
          renk:
        </div>
        <div class="renkbedenicerik">
          Siyah
        </div>
        <div class="renkbeden">
          beden
        </div>
        <div class="renkbedenicerik">
          2XL
        </div>
      </div>
      <div class="fiyat">
        699,99 TL
      </div>
      <div class="adetbeden">
        ADET: 1 BEDEN: 40
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
    padding: 15px;

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
</style>
