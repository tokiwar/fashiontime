<template>
  <div class="grid grid-cols-3 grid-rows-auto gap-4" v-if="$device.isDesktopOrTablet">
    <div v-for="item in items" :key="item.key" class="w-72 h-72 cursor-pointer">
      <img class="h-full w-full object-cover rounded-md" :src="item.img"/>
    </div>
  </div>
  <div class="flex flex-row justify-center items-center w-full" v-else>
    <swiper :options="swiperOptions" v-if="items">
      <swiper-slide v-for="item in items" :key="item.key">
        <div class="flex flex-col justify-center items-center w-11/12 mx-auto">
          <img :src="item.img" :alt="item.text" :title="item.text" height="400" width="400"/>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'GalleryItems',
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['items'],
  data: () => ({
    swiperOptions: {
      loop: true,
      initialSlide: 0,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      },
    },
  })
}
</script>
