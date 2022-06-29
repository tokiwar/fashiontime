<template>
  <div class="grid grid-cols-4 gap-4" v-if="$device.isDesktopOrTablet">
    <nuxt-link :to="item.link" v-for="item in items" :key="item.key" class="w-72 h-72 cursor-pointer relative"
               :class="{'col-span-2 w-auto' : (item.key === 1)}">
      <img class="h-full w-full object-cover rounded-md" :src="item.img" :alt="item.text" :title="item.text"/>
      <span class="absolute bottom-4 left-4 text-base bg-white py-2 px-4 uppercase rounded-md">{{ item.text }}</span>
    </nuxt-link>
  </div>
  <div class="flex flex-row justify-center items-center w-full" v-else>
    <swiper :options="swiperOptions" v-if="items">
      <swiper-slide v-for="item in items" :key="item.key">
        <nuxt-link :to="item.link" class="relative flex items-center justify-center">
          <div class="flex flex-col justify-center items-center w-11/12 relative">
            <div class="relative h-auto w-auto">
              <img :src="item.img" :alt="item.text" :title="item.text" height="400" width="400"/>
              <span class="absolute bottom-4 left-4 text-base bg-white py-2 px-4 uppercase rounded-md">{{
                  item.text
                }}</span>
            </div>
          </div>
        </nuxt-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ServicesList',
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
