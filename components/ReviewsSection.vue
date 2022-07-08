<template>
  <section class="flex flex-col justify-center items-center"
           :class="{'h-auto min-h-screen-65 space-y-14 py-20' : $device.isDesktopOrTablet, 'h-screen-60 mx-auto space-y-10' : $device.isMobile && $mq === 'sm', 'h-screen-auto py-10 mx-auto space-y-10' : $device.isMobile && $mq === 'md'}">
    <h2 class="text-yellow-orange font-impact uppercase"
        :class="{'text-9xl' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile}" v-html="'Отзывы'"/>
    <div class="h-auto w-full rounded-md flex justify-center items-center font-sans">
      <swiper :options="swiperOptions" v-if="items" class="w-11/12">
        <swiper-slide v-for="item in items" :key="item.key">
          <div
            class="shadow-xl border-2 border-sub-header-dark h-screen-35 rounded-md flex flex-col items-start space-y-6 justify-start py-8 px-8"
            :class="{'bg-sub-header text-white' : item.key % 2 !== 0}">
            <span class="text-3xl uppercase font-bold" v-html="item.name"/>
            <span class="w-11/12 text-justify text-xl" v-html="item.text"/>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ReviewsSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  data: () => ({
    swiperOptions: {
      loop: true,
      initialSlide: 0,
      spaceBetween: 16,
      slidesPerView: 2,
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      preloadImages: false,
      lazy: {
        loadPrevNext: true
      },
    },
    items: [

      {
        key: 0,
        text: 'Текст отзыва',
        name: 'Имя клиента'
      },
      {
        key: 1,
        text: 'Текст отзыва1',
        name: 'Имя клиента1'
      },
      {
        key: 2,
        text: 'Текст отзыва2',
        name: 'Имя клиента'
      },
      {
        key: 3,
        text: 'Текст отзыва13',
        name: 'Имя клиента1'
      }
    ]
  })
}
</script>
