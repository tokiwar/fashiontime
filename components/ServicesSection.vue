<template>
  <div class="bg-section py-10 flex flex-col justify-center space-y-10">
    <section class="h-auto flex flex-row justify-center items-center mx-auto"
             :class="{'w-5/6' : $device.isDesktopOrTablet, 'w-11/12' : $device.isMobile}">
      <div
        class="w-full bg-cover bg-center flex flex-row justify-around items-center bg-sub-header relative rounded-md"
        :class="{'h-screen-50' : $device.isDesktopOrTablet, 'h-auto py-4' : $device.isMobile}">
        <div class="flex flex-col h-5/6 space-y-8 justify-around items-center"
             :class="{'max-w-1/2 w-2/5' : $device.isDesktopOrTablet}">
          <ul class="text-base font-sans"
              :class="{'grid grid-rows-auto grid-cols-2 gap-y-8 gap-x-20' : $device.isDesktopOrTablet, 'grid grid-rows-auto grid-cols-2 gap-4 p-4' : mobileLandscape, 'flex flex-col w-11/12 space-y-4 justify-center items-center' : mobilePortrait}">
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
        <img v-if="section.img && !$device.isMobile" class="h-full max-w-1/2 object-cover"
             :src="section.img"/>
      </div>
    </section>
    <section class="h-auto flex flex-col items-center justify-center bg-section">
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
    <section class="h-auto flex flex-col items-center justify-center bg-section space-y-8">
      <div class="bg-section-gray rounded-md flex justify-between items-start"
           :class="{'w-5/6 flex-row py-8 px-10' : $device.isDesktopOrTablet, 'w-11/12 flex-col py-4 px-6 flex-col space-y-4' : $device.isMobile}"
           :id="section.hash"
           v-for="section in section.sections" :key="section.key">
        <div class="text-header flex flex-col space-y-4"
             :class="{'w-2/5' : $device.isDesktopOrTablet, 'w-full' : $device.isMobile }">
          <div class="font-bold"
               :class="{'text-6xl text-justify' : $device.isDesktopOrTablet, 'text-4xl text-center w-full' : $device.isMobile}">
            {{ section.text }}
          </div>
          <div class="italic text-lg"
               :class="{'w-5/6' : $device.isDesktopOrTablet, 'w-full text-center' : $device.isMobile}">
            Описание Описание Описание Описание Описание Описание Описание Описание
            Описание Описание
          </div>
          <div class="text-right font-bold text-2xl underline"
               :class="{'w-5/6' : $device.isDesktopOrTablet || mobileLandscape, 'w-full' : mobilePortrait}">от 450 ₽
          </div>
        </div>
        <div class="flex"
             :class="{'flex-row space-x-4 w-3/5' : $device.isDesktopOrTablet, 'flex-col space-y-4 w-full' : $device.isMobile}">
          <img class="w-full object-cover rounded-md"
               :class="{'h-64' : $device.isDesktopOrTablet || mobileLandscape, 'h-44' : mobilePortrait}"
               :src="require('@/assets/img/galleryItem.jpg')"/>
          <img class="w-full object-cover rounded-md"
               :class="{'h-64' : $device.isDesktopOrTablet || mobileLandscape, 'h-44' : mobilePortrait}"
               :src="require('@/assets/img/galleryItem.jpg')"/>
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
