<script lang="ts">
import { defineComponent } from 'vue'
import TheKayanresim from 'src/components/TheKayanresim.vue'
import TheUstbar from './TheUstbar.vue'
import TheBanner from './TheBanner.vue'
import SepetDetayurun from './SepetDetayurun.vue'
import SepetDetay from './SepetDetay.vue'
import TheUrun from './TheUrun.vue'
import UrunDetay from './UrunDetay.vue'
import TheFooter from './TheFooter.vue'
import TheSepet from './TheSepet.vue'
import SepetUrun from './SepetUrun.vue'



export default defineComponent({
  components: { TheUstbar, TheKayanresim, TheBanner,SepetDetayurun,SepetDetay ,TheUrun ,UrunDetay, TheFooter, TheSepet,SepetUrun},
  data() {
    return {
      selectedButton: null as number | null,
    }
  },
  methods: {
    showDiv(buttonNumber: number): void {
      this.selectedButton = buttonNumber
    },
  },
})
</script>

<template>
  <div class="gostergebutoncont">
    <button class="gostergebuton" @click="showDiv(1)">
      {{ 1 }}
    </button>
    <button class="gostergebuton" @click="showDiv(2)">
      {{ 2 }}
    </button>
    <button class="gostergebuton" @click="showDiv(3)">
      {{ 3 }}
    </button>
    <button class="gostergebuton" @click="showDiv(4)">
      {{ 4 }}
    </button>
    <button class="gostergebuton" @click="showDiv(5)">
      {{ 5 }}
    </button>
    <button class="gostergebuton" @click="showDiv(6)">
      {{ 6 }}
    </button>
    <button class="gostergebuton" @click="showDiv(7)">
      {{ 7 }}
    </button>
    <button class="gostergebuton" @click="showDiv(8)">
      {{ 8 }}
    </button>
    <button class="gostergebuton" @click="showDiv(9)">
      {{ 9 }}
    </button>
    <button class="gostergebuton" @click="showDiv(10)">
      {{ 10 }}
    </button>
  </div>
  <div v-show="selectedButton === 1" class="content-1">
    <TheUstbar/>
  </div>
  <div v-show="selectedButton === 2" class="content-2">
    <TheKayanresim />
  </div>
  <div v-show="selectedButton === 3" class="content-3">
    <TheBanner />
  </div>
  <div v-show="selectedButton === 4" class="content-4">
    <SepetDetayurun />
  </div>
  <div v-show="selectedButton === 5" class="content-5">
    <SepetDetay />
  </div>
  <div v-show="selectedButton === 6" class="content-6">
    <TheUrun />
  </div>
  <div v-show="selectedButton === 7" class="content-7">
    <UrunDetay />
  </div>
  <div v-show="selectedButton === 8" class="content-8">
    <TheFooter />
  </div>
  <div v-show="selectedButton === 9" class="content-9">
    <TheSepet />
  </div>
  <div v-show="selectedButton === 10" class="content-10">
    <SepetUrun />
  </div>
</template>

  <style scoped>
    .content { display: none; }
    .content.active { display: block; }
    .gostergebutoncont{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 50px;
    }
    .gostergebuton{
        display: flex;
        flex-direction: columns;
        height: 50px;
        width: 50px;
        align-items: center;

        background-color: rgb(60, 207, 248);
        color: white;
        justify-content:center;
        border: 1px solid gray;
        margin: 20px;
        font-size: 20px;
    }
  </style>
