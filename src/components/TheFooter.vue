<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="footer-cola">
          <h5>MÜŞTERİ HİZMETLERİ</h5>
          <ul>
            <li><a href="">Kolay İade</a></li>
            <li><a href="">Kampanyalar</a></li>
            <li><a href="">Sıkça Sorulan Sorular</a></li>
            <li><a href="">Cayma Hakkı Bilgi Rehberi</a></li>
            <li><a href="">İşlem Rehberi</a></li>
          </ul>
        </div>
        <div class="footer-cola">
          <h5>KURUMSAL</h5>
          <ul>
            <li><a href="">Lumberjack Hakkında</a></li>
            <li><a href="">Mağazalarımız</a></li>
            <li><a href="">Kişisel Verilerin Korunması</a></li>
            <li><a href="">İletişim</a></li>
          </ul>
        </div>
        <div class="footer-colb">
          <h4><input class="btn" type="button" value="SİPARİŞİNİ TAKİP ET"></h4>
          <div class="social-links">
            <a href=""><i class="fab fa-facebook" /></a>
            <a href=""><i class="fa-brands fa-x-twitter" /></a>
            <a href=""><i class="fab fa-pinterest" /></a>
            <a href=""><i class="fab fa-instagram" /></a>
            <a href=""><i class="fab fa-youtube" /></a>
          </div>
          <div>
            <img src="src/assets/qr.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="footer-line" />
    <div class="footer-alt">
      <div class="ust-yazi">
        6 Aya Varan Taksit Seçenekleri
      </div>
      <div class="kartlar">
        <img class="bank1" src="src/assets/banks1.png" alt="">
        <img class="bank2" src="src/assets/banks2.png" alt="">
      </div>
      <div class="alt-yazi">
        © 2022 Lumberjack.com.tr. Her hakkı saklıdır.
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer {
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  line-height: 1.5;
  color: #333;
}

.container {
  max-width: 96%;
  align-items: center;
margin: 0 auto;
}

ul {
  list-style: none;
}

.row {
  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
}

.footer-cola {
  width: 25%;
  font-weight: 500;
}

.footer-colb {
  display: flex;
  flex-direction: column;
  width: 50%;
  font-weight: 500;

}

h4 {
  font-weight: 400;
  font-size: 14px;
}

.footer-cola h4 {
  font-size: 18px;
  color: #000;
  text-transform: capitalize;
  margin-bottom: 30px;
  position: relative;
}

.footer-cola h5 {
  font-weight: 550;
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 5px;
}

.footer-cola ul li a {
  text-decoration: none;
  color: #000;
  line-height:2;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
}

.footer-colb h4 {
  font-size: 14px;
  color: #000;
  text-transform: capitalize;
  margin-bottom: 30px;
  position: relative;
}

.footer-colb h5 {
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1px;
}

.footer-colbul li a {
  text-decoration: none;
  color: #000;
  line-height: 1.8;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
}

.btn {
  width: 100%;

  line-height: 1;
  background-color: #000 !important;
  border: 2px solid #000;
  color: #fff !important;
  letter-spacing: 1px;
  height: 35px;
}

.footer-colb .social-links a {
  display: inline-block;
  height: 42px;
  width: 42px;
  color: #fff;
  background-color: gray;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  margin-left: 25px;
}

.footer-colb .social-links {
  text-align: right;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
}

.footer-colb img {
  float: right;
  width: 100px;
}

.footer-line {
  height: 10px;
  background: #e2e2e2;
  margin: 10px 20px 10px 20px;

}
.footer-alt{
  font-family: sans-serif;
  padding: 0px 25px 40px;
}
.ust-yazi{
  font-size: 18px;
    font-weight: 400;
    line-height: 1.44;
    color: #000;
    padding-bottom: 8px;
    text-align: left;
    letter-spacing: 1px;
}
.kartlar{
  padding: 10px 10px 0 10px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

}
.bank1{
width: 50%;
height: 25px;
}
.bank2{
  max-width: fit-content;
  height: 45px;
}
.alt-yazi{
  padding: 30px 0 30px 0;
  font-size: 15px;
  text-decoration-color: #333333;
  letter-spacing: 1px;
}
</style>
