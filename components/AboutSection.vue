<template>
  <section class="relative flex flex-col items-center justify-center relative"
           v-if="SectionData"
           :class="{'py-8 h-auto' : $device.isMobile}">
    <h2 class="font-impact uppercase text-yellow-orange z-10"
        :class="{'text-9xl top-3/10 mx-auto absolute' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile }"
        v-html="SectionData.title"/>
    <div class="flex items-center justify-center mx-auto relative"
         :class="{'flex-row space-x-20 h-screen w-3/6' : $device.isDesktopOrTablet, 'flex-col space-y-4 w-5/6 pt-8' : $device.isMobile && $mq === 'sm', 'flex-row space-x-4 w-5/6 pt-8' : $device.isMobile && $mq === 'md'}">
      <img class="rounded-md object-cover" :class="{'w-136' : $device.isDesktopOrTablet, 'h-96' : $device.isMobile}"
           :src="SectionData.img" :alt="SectionData.title"
           :title="SectionData.title"/>
      <span class="font-sans" :class="{'text-base w-11/12' : $device.isMobile}" v-html="SectionData.text"/>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AboutSection',
  props: ['SectionData']
}
</script>
