<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface ImageSlider {
  images: string[];
  currentIndex: number;
  isDragging: boolean;
  dragStartX: number;
  imagePosition: number;
}

const data = ref<ImageSlider>({
  images: [
    'src/assets/kayan-resim1.webp',
    'src/assets/kayan-resim2.webp',
    'src/assets/kayan-resim3.webp',
  ],
  currentIndex: 0,
  isDragging: false,
  dragStartX: 0,
  imagePosition: 0,
});

const currentImage = ref(data.value.images[data.value.currentIndex]);

const imageStyles = ref({
  transform: `translateX(${data.value.imagePosition}px)`,
});

const router = useRouter();

const nextImage = () => {
  data.value.currentIndex = (data.value.currentIndex + 1) % data.value.images.length;
  data.value.imagePosition = 0;
  currentImage.value = data.value.images[data.value.currentIndex];
  imageStyles.value = { transform: `translateX(${data.value.imagePosition}px)` };
};

const prevImage = () => {
  data.value.currentIndex =
    (data.value.currentIndex - 1 + data.value.images.length) % data.value.images.length;
  data.value.imagePosition = 0;
  currentImage.value = data.value.images[data.value.currentIndex];
  imageStyles.value = { transform: `translateX(${data.value.imagePosition}px)` };
};

const imageClicked = () => {
  switch (data.value.currentIndex) {
    case 0:
      // Redirect to the "Urunler" page when the first image is clicked
      router.push('Urunsec');
      break;
    case 1:
      // Redirect to the "Ayakkabi" page when the second image is clicked
      router.push('Urunler');
      break;
    // Add more cases if you have more images
    default:
      break;
  }
};
</script>

<template>
  <div id="banner-container">
    <img :src="currentImage" alt="Banner" :style="imageStyles" @click="imageClicked">
    <button id="prev-button" @click="prevImage">
      <img src="src/assets/slidersol.svg" alt="Previous">
    </button>
    <button id="next-button" @click="nextImage">
      <img src="src/assets/slidersag.svg" alt="Next">
    </button>
  </div>
</template>

<style scoped>
#banner-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

#banner-container img {
  width: 99.5%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  padding-left: 5px;
}

#prev-button,
#next-button {
  position: absolute;
  top: 50%;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

#prev-button {
  left: 10px;
}

#next-button {
  right: 10px;
}

/* Stil resim düğmeleri için özelleştirilebilir */
#prev-button img,
#next-button img {
  width: 25px;
  height: 30px;
}
</style>
