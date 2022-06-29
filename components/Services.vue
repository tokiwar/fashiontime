<template>
  <section class="bg-pattern-salon bg-sub-header flex flex-col justify-center items-center"
           :class="{'h-screen space-y-14' : $device.isDesktopOrTablet, 'h-screen-60 mx-auto space-y-10' : $device.isMobile && $mq === 'sm', 'h-screen-auto py-10 mx-auto space-y-10' : $device.isMobile && $mq === 'md'}">
    <h2 class="text-white font-impact uppercase"
        :class="{'text-9xl' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile}">Услуги</h2>
    <services-list :items="items"/>
  </section>
</template>
<script>
export default {
  name: 'Services',
  props: ['items']
}
</script>
