<template>
  <section class="bg-pattern-salon bg-sub-header flex flex-col justify-center items-center"
           :class="{'h-screen space-y-14' : $device.isDesktopOrTablet, 'h-screen-70 mx-auto space-y-10' : $device.isMobile && $mq === 'sm', 'h-screen-auto py-10 mx-auto space-y-10' : $device.isMobile && $mq === 'md'}">
    <h2 class="text-white font-impact uppercase"
        :class="{'text-9xl' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile}">Связь</h2>
    <feedback-form/>
  </section>
</template>
<script>
export default {
  name: 'Feedback',
}
</script>
