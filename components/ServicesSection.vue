<template>
  <div class="bg-section">
    <section class="h-auto flex py-10 flex-row justify-center items-center mx-auto"
             :class="{'w-5/6' : $device.isDesktopOrTablet, 'w-11/12' : $device.isMobile}">
      <div
        class="w-full h-screen-50 bg-cover bg-center flex flex-row justify-around items-center bg-sub-header relative rounded-md">
        <div class="flex flex-col h-5/6 space-y-8 justify-around items-center"
             :class="{'max-w-1/2 w-2/5' : $device.isDesktopOrTablet || mobileLandscape}">
          <ul class="text-base font-sans"
              :class="{'grid grid-rows-auto grid-cols-2 gap-y-8 gap-x-20' : $device.isDesktopOrTablet || mobileLandscape, 'flex flex-col w-11/12 space-y-4 justify-center items-center' : mobilePortrait}">
            <li class="flex flex-row space-x-4 justify-start items-center w-full" v-for="link in section.links"
                :key="link.key">
              <div class="h-11 w-auto">
                <svg-icon v-if="link.icon" class="h-11 w-11" :name="link.icon"/>
              </div>
              <div class="flex flex-col">
                <span class="font-bold">{{ link.main }}</span>
                <span v-if="link.sub" class="text-gray-800">{{ link.sub }}</span>
              </div>
            </li>
          </ul>
        </div>
        <img v-if="section.img && !mobilePortrait" class="h-full max-w-1/2 object-cover"
             :src="section.img"/>
      </div>
    </section>
    <section class="h-auto py-10 flex flex-col items-center justify-center bg-section">
      <ul class="grid grid-rows-auto gap-x-12 gap-y-2"
          :class="{'grid-cols-3' : $device.isDesktopOrTablet || mobileLandscape, 'grid-cols-2' : mobilePortrait, 'w-11/12' : $device.isMobile}">
        <li v-for="section in section.sections" :key="section.key">
          <nuxt-link :to="{path: section.link, hash: section.hash}"
                     class="space-x-4 underline hover:no-underline text-lg hover:text-header flex flex-row justify-start items-center">
            <svg-icon v-if="section.icon" class="h-8 w-8" :name="section.icon"/>
            <span class="text-lg">{{ section.text }}</span>
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="h-auto py-10 flex flex-col items-center justify-center bg-section space-y-8"
             v-if="$device.isDesktopOrTablet">
      <div class="w-5/6 py-8 px-10 bg-section-gray rounded-md flex flex-row justify-between items-start"
           :id="section.hash"
           v-for="section in section.sections" :key="section.key">
        <div class="text-header flex flex-col space-y-2 w-2/5">
          <div class="text-6xl font-bold text-justify">{{ section.text }}</div>
          <div class="italic w-5/6 text-lg">Описание Описание Описание Описание Описание Описание Описание Описание
            Описание Описание
          </div>
          <div class="w-5/6 text-right font-bold text-2xl underline">от 450 ₽</div>
        </div>
        <div class="flex flex-row space-x-4 w-3/5">
          <img class="h-64 w-full object-cover rounded-md" :src="require('@/assets/img/galleryItem.jpg')"/>
          <img class="h-64 w-full object-cover rounded-md" :src="require('@/assets/img/galleryItem.jpg')"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ServicesSection',
  props: ['section'],
  computed: {
    mobilePortrait() {
      return this.$device.isMobile && this.$mq === 'sm';
    },
    mobileLandscape() {
      return this.$device.isMobile && this.$mq === 'md'
    }
  }
}
</script>
