<template>
  <div class="body">
    <div class="banner">
      <img class="bannerresim" src="src/assets/donemselreklam1.webp" alt="">
    </div>
    <div class="banner">
      <img class="bannerresim" src="src/assets/donemselreklam2.webp" alt="">
    </div>
    <div class="kategori">
      <div class="Bannerresimler">
        <img class="bannerresim" src="src/assets/erkek.webp" alt="">
      </div>
      <div class="Bannerresimler">
        <img class="bannerresim" src="src/assets/cocuk.webp" alt="">
      </div>
      <div class="Bannerresimler">
        <img class="bannerresim" src="src/assets/kadin.webp" alt="">
      </div>
    </div>
    <div class="banner">
      <img class="bannerresim" src="src/assets/aksesuar.webp" alt="">
    </div>
  </div>
</template>
<style>
.body {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto; /* Sayfa ortalamak için */
  padding: 15px; /* İki tarafındaki boşluklar için */
}

.kategori {
  display: flex;
  flex-wrap: wrap; /* Alt sıradaki elemanlara geçmek için */
  margin: 15px 0 5px 0 ; /* İki tarafındaki boşlukları telafi etmek için */
}

.Bannerresimler {
  flex: 0 0 33.33333333% ;
  max-width: 33.33333333% ;
  box-sizing: border-box; /* Padding'i dahil etmek için */
}

.banner {
  flex: 0 0 100%;
  max-width: 100%;
  padding: 15px 0 0 0;
  box-sizing: border-box; /* Padding'i dahil etmek için */
}

.bannerresim {
  width: 100%;
  height: auto;
  display: block; /* Inline margin sorununu çözmek için */
}
</style>
