<script lang="ts">
export default {

 props: {
    urun: {
      type: Object,
      required: true,
    },
  },
}
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
              7 - 8 Aralık
            </div>
          </div>
        </div>
      </div>
      <div class="beden">
        <div class="bedensol">
          Beden:
        </div>
        <div class="bedensag">
          {{urun.beden}}
        </div>
      </div>
      <div class="urunsayiconteiner">
        <div class="urunsayicerceve">
          <div class="urunsayi">
            {{urun.adet}}
          </div>
          <div class="urunsayibuton">
            <button class="butonstyle">+</button>
          </div>
        </div>
      </div>
      <div class="urunfiyat">
        <div class="urunfiyateski">
          {{ urun.fiyat }}TL
        </div>
        <div class="urunfiyatyeni" v-if="urun.indirimOrani > 0">
          {{ calculateIndirimliFiyat(urun.fiyat, urun.indirimOrani) }}TL
        </div>
      </div>
      <div class="silbutonconteiner">
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
  .butonstyle {
border: none;
background-color: transparent;
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
      padding:10px;
  }

  .urunozet {
      display: flex;
      flex-direction: row;
      width: 40%;
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
      flex-direction: column;
  }

  .urunkargosuresol {
      display: flex;
      width: 70%;
      color: green;
      letter-spacing: 1px;
  }

  .urunkargosuresag {
      display: flex;
      width: 30%;
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
      height: 25px;
      width: 75px;
      border: 1px solid rgb(167, 167, 167);
      border-radius: 25px;
      font-size: 16px;
      text-align: center;
      justify-content: center;
      align-items: center


  }

  .urunsayi {
      font-style: sans-serif;
  }

  .urunsayibuton {
      position: absolute;
      float: right;
      margin-left: 50px;
      font-size: 18px;
      justify-content: center;
  }

  .urunfiyat {
      display: flex;
      flex-direction: column;
      width: 15%;
      height: 80px;
      justify-content: center;
      align-items: center;
  }

  .urunfiyateski {
      color: rgb(145, 145, 145);
      text-decoration: line-through;

  }

  .urunfiyatyeni {
      font-size: 15px;
      font-weight: 800;
  }

  .silbutonconteiner {
      display: flex;
      flex-direction: row;
      width: 5%;
      height: 50px;
      justify-content: center;
      align-items: center;
      color: rgb(167, 167, 167);
      padding-left: 2px;
  }
  </style>
