<script lang="ts">
import TheSepet from 'src/components/TheSepet.vue'
import { ref, onMounted } from 'vue';
import { useSepetStore } from 'stores/sepet';



export default {



  name: 'TheBolum',
  components: {
    TheSepet,
  },
  data() {
    return {
      showSepet: false,
    }
  },
  methods: {
    toggleArama(): void {
      // ... toggleArama fonksiyonu içeriği ...
    },
    togglesepetackapa(): void {
      this.showSepet = !this.showSepet
    },
    applyAndGoFilters(yas, cinsiyet, ustTur, altTur) {
      this.$router.push({
        path: '/Urunler',
        query: { yas, cinsiyet, ustTur, altTur }
      });
    }
  },
  setup() {
    const isSubMenuVisible = ref(false);

    const showSubMenu = () => {
      isSubMenuVisible.value = true;
    };

    const hideSubMenu = () => {
      isSubMenuVisible.value = false;
    };

    onMounted(() => {
      sepetStore.getFirebaseToSepet();
    });

    const sepetStore = useSepetStore();
    const sepetUrunler = sepetStore.sepetUrunleri;

    const toplamAdetHesapla = () => {
      const toplam = sepetUrunler.reduce((acc, urun) => acc + urun.adet, 0);
      const basamaklar = toplam.toString().split('').map(Number);
      const toplamson = basamaklar.reduce((acc, curr) => acc + curr, 0);
      return toplamson;
    };

    return {
      isSubMenuVisible,
      showSubMenu,
      hideSubMenu,
      totaladet: toplamAdetHesapla(),
    };
  },
}
</script>

<template>
  <!-- <div class="menumenumenu">  </div>-->
  <div class="ana-bolum">
    <div class="kutu1">
      <img class="kutu1resim" src="src/assets/component 1/kargo-bedava-web.webp" style="height: 100%;">
    </div>

    <div class="kutu2">
      <div class="kutu2-ust">
        <div class="sol">
          <p>750 TL VE ÜZERİ ÜCRETSİZ KARGO</p>
        </div>
        <div class="sag">
          <button id="siparis-takibi">
            SİPARİŞ TAKİBİ
          </button>
          <span class="isaret">/</span>
          <button id="hesap-bilgileri">
            HESABIM
          </button>
          <span class="isaret">/</span>
          <button id="cikis-yap">
            ÇIKIŞ YAP
          </button>
        </div>
      </div>
      <div style="background-color: gray; height: 1px;" />
      <div class="kutu2-alt">
        <div class="logo">
          <router-link to="/Anasayfa">
            <img src="src/assets/component 1/lumberjack logo.png" alt="Lumberjack Logo">
          </router-link>
        </div>
        <div class="menuler">
          <div class="menu-item" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
            <button class="ustmenubuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', '', '')">
              Kadın
            </button>
            <div class="menu-item-item " v-show="isSubMenuVisible">
              <div class="menu-item-satir">
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', '')">
                    Ayakkabı
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', 'Sneaker')">
                    Sneaker
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', 'Koşu')">
                    Koşu
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', 'Yürüyüş')">
                    Yürüyüş
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', 'Comfort')">
                    Comfort
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', 'Sandalet')">
                    Sandalet
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Ayakkabı', 'Terlik')">
                    Terlik
                  </button>
                </div>
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', '')">
                    Giyim
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', 'T-shirt')">
                    T-shirt
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', 'Sweatshirt')">
                    Sweatshirt
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', 'Eşofman')">
                    Eşofman
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', 'Tayt')">
                    Tayt
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', 'Sport Bra')">
                    Sport Bra
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Giyim', 'Şort')">
                    Şort
                  </button>
                </div>
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', '')">
                    Aksesuar
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Çanta')">
                    Çanta
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Sırt Çantası')">
                    Sırt Çantası
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Valiz')">
                    Valiz
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Çorap')">
                    Çorap
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Atkı-Bere-Eldiven')">
                    Atkı-Bere-Eldiven
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="menu-item" @mouseover="showSubMenu" @mouseleave="hideSubMenu">

            <button @click="applyAndGoFilters('Yetişkin', 'Erkek', '', '')" class="ustmenubuton">
              Erkek
            </button>
            <div class="menu-item-item " v-show="isSubMenuVisible">
              <div class="menu-item-satir">
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', '')">
                    Ayakkabı
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Sneaker')">
                    Sneaker
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Koşu')">
                    Koşu
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Yürüyüş')">
                    Yürüyüş
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Casual')">
                    Casual
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Comfort')">
                    Comfort
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Sandalet')">
                    Sandalet
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Ayakkabı', 'Terlik')">
                    Terlik
                  </button>
                </div>
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', '')">
                    Giyim
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'T-shirt')">
                    T-shirt
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Sweatshirt')">
                    Sweatshirt
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Eşofman')">
                    Eşofman
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Softshell')">
                    Softshell
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Şort')">
                    Şort
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Deniz Şortu')">
                    Deniz Şortu
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Polar')">
                    Polar
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Giyim', 'Mont')">
                    Mont
                  </button>
                </div>
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', '')">
                    Aksesuar
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Çanta')">
                    Çanta
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Sırt Çantası')">
                    Sırt Çantası
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Valiz')">
                    Valiz
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Şapka')">
                    Şapka
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Cüzdan')">
                    Cüzdan
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Kemer')">
                    Kemer
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Çorap')">
                    Çorap
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Atkı-Bere-Eldiven')">
                    Atkı-Bere-Eldiven
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-item" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
            <button @click="applyAndGoFilters('Çocuk', '', '', '')" class="ustmenubuton">
              Çocuk
            </button>
            <div class="menu-item-item " v-show="isSubMenuVisible">
              <div class="menu-item-satir">
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Çocuk', 'Kadın', '', '')">
                    Kız Çocuk
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Çocuk', 'Kadın', 'Ayakkabı', 'Sneaker')">
                    Sneaker
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Koşu')">
                    Koşu
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Sandalet')">
                    Sandalet
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Terlik')">
                    Terlik
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Kadın', 'Aksesuar', 'Deniz')">
                    Deniz
                  </button>
                </div>
                <div class="menu-item-kolon">
                  <button class="ustmenuacilirbutonust" @click="applyAndGoFilters('Çocuk', 'Erkek', '', '')">
                    Erkek Çocuk
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Çocuk', 'Erkek', 'Ayakkabı', 'Sneaker')">
                    Sneaker
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Koşu')">
                    Koşu
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Sandalet')">
                    Sandalet
                  </button>
                  <button class="ustmenuacilirbuton"
                    @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Terlik')">
                    Terlik
                  </button>
                  <button class="ustmenuacilirbuton" @click="applyAndGoFilters('Yetişkin', 'Erkek', 'Aksesuar', 'Deniz')">
                    Deniz
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="menu-item">
            <button @click="applyAndGoFilters('', '', 'Giyim', '')" class="ustmenubuton">
              Giyim
            </button>
          </div>
          <div class="menu-item">
            <button @click="applyAndGoFilters('', '', 'Aksesuar', '')" class="ustmenubuton">
              Aksesuar
            </button>

          </div>
          <div class="menu-item">
            <button @click="applyAndGoFilters('', '', 'Outdoor', '')" class="ustmenubuton">
              Outdoor
            </button>
          </div>
          <div class="menu-item">
            <button @click="applyAndGoFilters('', '', 'İndirim', '')" class="ustmenubuton">
              İndirim
            </button>
          </div>
        </div>
        <div class="sepet-arama">
          <div class="acilirarama" style="display: none;">
            <div class="aramayeri">
              <input type="text" placeholder="" class="arama-input">
            </div>
            <div class="aramayazi">
              <button class="arabuton">
                ARA
              </button>
            </div>
          </div>
          <div class="arama" @click="toggleArama">
            <i class="fas fa-search" />
          </div>
          <div class="sepet" @click="togglesepetackapa">
            <i class="fas fa-shopping-bag" />
            <div class="sepeturunsayisi">
              {{ totaladet }}
            </div>
          </div>
        </div>
        <div v-if="showSepet" class="acilirsepetcomponent">
          <div class="closewindow" @click="togglesepetackapa">
            <i class="fa fa-times" />
          </div>
          <div class="sepetacilirr">
            <TheSepet />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ustmenubuton {
  font-size: 15px;
}

.ustmenuacilirbuton {
  color: #707070;
  font-size: 12px;
  font-weight: 400;

}

.ustmenuacilirbutonust {
  color: #707070;
  font-size: 13px;
  font-weight: 600;

}

.menu-item-satir {
  display: flex;
  flex-direction: row;
  padding: 15px;
}

.menu-item-kolon {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-right: 10px;
  line-height: 1;
}

.menu-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  ;
}

.menu-item-item {
  position: fixed;
  top: 230px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  padding: 10px;
  width: 75%;
  height: auto;
  z-index: 1000;
  display: none;
  flex-direction: row;
  border: 1px solid #000;
  border-radius: 10px;
  border-bottom: 6px solid rgb(0, 0, 0);
  /* Alt kenarı 2 piksel kalınlığında ve mavi renkte */

}

.menu-item:hover .menu-item-item {
  display: block;
}

.ana-bolum {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.kutu1 {
  height: 59px;
  background-color: #c8a51c;
  max-width: 100%;
}

.kutu1resim {
  max-width: 100%;

}

.kutu2 {
  height: 141px;
  width: 100%;
  background-color: #000000;
  display: flex;
  flex-direction: column;

}

.kutu2-ust {
  background-color: #000000;
  text-align: center;
  width: 100%;
  height: 28px
}

.sol {
  float: left;
  padding: 5px;
  padding-left: 25px;
}

.sag {
  float: right;
  padding: 0px;
  padding-right: 50px;
}

p {
  font-size: 11px;
  color: #ffffff;
  letter-spacing: 0.75px;

}

button {
  background-color: transparent;
  color: #fff;
  font-size: 10px;
  font-family: sans-serif;
  border: none;
  cursor: pointer;
  letter-spacing: 1px;

}

button::after {
  position: absolute;
  right: 0;
  top: 0;
  color: #fff;
}

.isaret {
  padding: 0px 10px 0px 10px;
  color: #c7c7c7;
}

.kutu2-alt {
  width: 100%;
  color: white;
  align-items: center;
  height: 111px;
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
}

.logo {
  flex: 0 0 25%;
  max-width: 25%;
}

.logo img {
  float: left;
  padding: 5px;

}

.menuler {
  display: flex;
  font-family: sans-serif;
  font-size: 15px;
  flex: 0 0 58.33333333%;
  max-width: 58.33333333%;
}

.menu-item {
  position: relative;
  margin-left: 0px;

}

.menu-item:hover .submenu {
  display: block;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  left: -130px;
  width: 640px;
  z-index: 1;
}

.menu-item:hover .submenu {
  display: block;
}

.submenu a {
  display: block;
  margin-bottom: 5px;
  text-decoration: none;
  color: #333;
}

.submenu a:hover {
  color: #0070cc;
}

.sepet-arama {
  display: flex;
  align-items: center;
  /* Dikey olarak ortalamak için */
  justify-content: flex-end;
  flex: 0 0 16.66666667%;
}

.sepet {
  display: flex;
  /* İkonların içerisinde de flex kullanarak dikey ve yatayda ortalamak için */
  justify-content: center;
  /* Yatayda ortalamak için */
  align-items: center;
  /* Dikey olarak ortalamak için */
  height: 30px;
  width: 30px;
  object-fit: cover;
  position: relative;
}

.sepet i {
  font-size: 25px;
}

.arama {
  display: flex;
  /* İkonların içerisinde de flex kullanarak dikey ve yatayda ortalamak için */
  justify-content: center;
  /* Yatayda ortalamak için */
  align-items: center;
  /* Dikey olarak ortalamak için */
  height: 30px;
  width: 30px;
  object-fit: cover;
  padding-right: 15px;
  padding-top: 5px;
}

.arama i {
  font-size: 20px;
}

.acilirarama {
  flex-direction: row;
  display: flex;
  height: 30px;
  padding-right: 20px;
  width: 180px;
}

.aramayeri {
  background-color: #ffffff;
  height: 30px;
  width: 120px;

}

.aramayazi {
  height: 30px;
  width: 40px;
  justify-content: center;
  text-align: center;
  display: flex;
  /* İkonların içerisinde de flex kullanarak dikey ve yatayda ortalamak için */
  padding-left: 10px;
}

.arabuton {
  background-color: black;
  text-decoration-color: white;
  font-family: sans-serif;
  font-size: 13px;
  align-items: center;
  font-weight: 800;
}

.arama-input {
  height: 30px;
  width: 120px;
  background-color: white;
  color: black;
  /* Yazı rengi */
  border: none;
  /* Çerçeve yok */
  outline: none;
  margin-left: 1px;
}

.acilirsepetcomponent {
  position: absolute;
  flex-direction: row-reverse;
  right: 0;
  top: 190px;
  z-index: 1;
  width: 100%;

}

.sepeturunsayisi {
  position: absolute;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  color: rgb(0, 0, 0);
  border-radius: 50%;
  /* Optional: Makes the background circle */
  padding: 5px 8px;
  /* Adjust padding for better visibility */
  font-size: 10px;
  font-family: sans-serif;
  font-weight: 400;
}

.arama:hover,
.closewindow,
.sepet:hover {
  cursor: pointer;
}

.closewindow {
  position: absolute;
  height: 40px;
  width: 40px;
  background-color: #D2D2D2;
  right: 0;
  top: 0px;
  z-index: 1;
  text-align: center;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
}

.sepetacilirr {
  display: flex;
  flex-direction: row-reverse;

}
</style>
