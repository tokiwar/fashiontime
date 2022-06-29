<template>
  <section class="flex flex-col justify-center items-center"
           :class="{'h-screen space-y-14' : $device.isDesktopOrTablet, 'h-screen-60 mx-auto space-y-10' : $device.isMobile && $mq === 'sm', 'h-screen-auto py-10 mx-auto space-y-10' : $device.isMobile && $mq === 'md'}">
    <h2 class="text-yellow-orange font-impact uppercase"
        :class="{'text-9xl' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile}">Галерея</h2>
    <gallery-items :items="items"/>
  </section>
</template>
<script>
export default {
  name: 'Gallery',
  props: ['items']
}
</script>
