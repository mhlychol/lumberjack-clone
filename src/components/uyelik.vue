<template>
  <div class="anacont">
    <div class="anabolum">
      <div class="ust yazi">
        <div class="yazi1">
          Merhaba,
        </div>
        <div class="yazi2">
          Giriş yap veya hesap oluştur, fırsatları kaçırma!
        </div>
      </div>
      <div class="uyegirisbtn">
        <button id="uye-ol-button">
          Giriş Yap
        </button>
        <button id="giris-yap-button">
          Uye Ol
        </button>
      </div>
      <form id="uye-ol-form" class="form-group" style="display: none;">
        <input type="text" placeholder="Telefon">
        <input type="text" placeholder="E-posta">
        <input type="password" placeholder="Şifre">
        <label for="kadin">Kadın</label>
        <input id="kadin" type="radio" name="cinsiyet">
        <label for="erkek" class="gender-label">Erkek</label>
        <input id="erkek" type="radio" name="cinsiyet">
        <button>Kaydol</button>
      </form>

      <form id="giris-yap-form" class="form-group" style="display: none;">
        <input type="text" placeholder="E-posta">
        <input type="password" placeholder="Şifre">
        <button>Giriş Yap</button>
      </form>
    </div>
  </div>
</template>

<style>
.anacont {
    background-color: #F8F8F8;

}

.anabolum {
    flex-direction: column;
    display: flex;
    align-items: center;
    padding: o 15px;
    width: 650px;
    margin: 0 auto;
    padding: 15px;

}

.ustyazi {
    flex-direction: column;
    display: flex;
    text-align: center;
}

.yazi1 {
    text-align: center;
    font-family: sans-serif;
    font-size: 22px;
    letter-spacing: 1px;
}

.yazi2 {
    text-align: center;
    font-family: sans-serif;
    font-size: 16px;
    letter-spacing: 1px;
    text-decoration-color: #333333;
}

.uyegirisbtn {
    display: flex;
    justify-content: space-around;
    font-family: poppins, sans-serif;
    font-size: 20px;
    background-color: white;
    width: 600px;
    height: 55px;
    margin: 20px 20px 0px 20px;
}
</style>
