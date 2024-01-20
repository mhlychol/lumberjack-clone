<script>
import TheSepet from 'src/components/TheSepet.vue'

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
    toggleArama() {
      const acilirArama = document.querySelector('.acilirarama')
      const arama = document.querySelector('.arama')

      if (acilirArama.style.display === 'none' || acilirArama.style.display === '') {
        acilirArama.style.display = 'flex'
        arama.style.display = 'none'
      } else {
        acilirArama.style.display = 'none'
        arama.style.display = 'flex'
      }
    },
    togglesepetackapa() {
      this.showSepet = !this.showSepet
    },
  },
}
</script>

<template>
  <div class="ana-bolum">
    <div class="kutu1">
      <img src="src/assets/component 1/kargo-bedava-web.webp" style="height: 100%;">
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
          <img src="src/assets/component 1/lumberjack logo.png">
        </div>
        <div class="menuler">
          <div class="menu-item">
            Kadın
            <div class="submenu">
              <a href="#">Elbissadasdeler</a>
              <a href="#">Ayakkabılar</a>
              <!-- Diğer alt menüler -->
            </div>
            <div class="submenu">
              <a href="#">asdas</a>
              <a href="#">Ayakkabılar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Erkek
            <div class="submenu">
              <a href="#">Gömlekler</a>
              <a href="#">Pantolonlar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Çocuk
            <div class="submenu">
              <a href="#">Çocuk Elbiseleri</a>
              <a href="#">Oyuncaklar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Giyim
            <div class="submenu">
              <a href="#">Şapkalar</a>
              <a href="#">Atkılar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Aksesuar
            <div class="submenu">
              <a href="#">Şapkalar</a>
              <a href="#">Atkılar</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            Outdoor
            <div class="submenu">
              <a href="#">Kamp Malzemeleri</a>
              <a href="#">Spor Giyim</a>
              <!-- Diğer alt menüler -->
            </div>
          </div>
          <div class="menu-item">
            İndirim
            <div class="submenu">
              <a href="#">Yaz İndirimi</a>
              <a href="#">Kış İndirimi</a>
              <!-- Diğer alt menüler -->
            </div>
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
              2
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
.ana-bolum {
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.kutu1 {
  height: 59px;
  width: 100%;
  background-color: #c8a51c;
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
  margin-left: 20px;

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
.acilirsepetcomponent{
  position: absolute;
  flex-direction: row-reverse;
  right: 0;
  top: 190px;
  z-index: 1;
  width: 100%;

}
.sepeturunsayisi{
  position: absolute;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  color: rgb(0, 0, 0);
  border-radius: 50%; /* Optional: Makes the background circle */
  padding: 5px 8px; /* Adjust padding for better visibility */
  font-size: 10px;
  font-family: sans-serif;
  font-weight: 400;
}
.arama:hover,
.sepet:hover {
  cursor: pointer;
}
.closewindow{
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
  font-weight:600;
}
.sepetacilirr{
display: flex;
flex-direction: row-reverse;

}
</style>
