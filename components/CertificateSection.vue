<template>
  <section>
    <div class="bg-pattern-salon bg-sub-header flex flex-col justify-center items-center"
         :class="{'h-auto min-h-screen space-y-14 py-20' : $device.isDesktopOrTablet, 'h-screen-60 mx-auto space-y-10' : $device.isMobile && $mq === 'sm', 'h-screen-auto py-10 mx-auto space-y-10' : $device.isMobile && $mq === 'md'}">
      <h2 class="text-white font-impact uppercase"
          :class="{'text-9xl' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile}" v-html="SectionData.title"/>
      <div class="grid grid-cols-3 grid-rows-auto gap-4">
        <div v-for="(item, itemIndex) in items" :key="item.key" class="w-72 h-72 cursor-pointer"
             @click="index = itemIndex">
          <img class="h-full w-full object-cover rounded-md" :src="item.img"/>
        </div>
      </div>
    </div>
    <CoolLightBox
      :items="itemsRaw"
      :index="index"
      @close="index = null">
    </CoolLightBox>
  </section>
</template>
<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
  name: 'CertificateSection',
  components: {
    CoolLightBox,
  },
  data: () => ({
    SectionData: {
      title: 'Дипломы и сертификаты'
    },
    index: null,
    itemsRaw: [
      require('@/assets/img/galleryItem.jpg'),
      require('@/assets/img/galleryItem.jpg'),
      require('@/assets/img/galleryItem.jpg'),
      require('@/assets/img/galleryItem.jpg'),
      require('@/assets/img/galleryItem.jpg'),
      require('@/assets/img/galleryItem.jpg'),
    ],
    items: [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg')
      }
    ]
  })
}
</script>
