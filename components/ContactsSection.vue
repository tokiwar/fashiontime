<template>
  <section class="flex justify-center items-center text-center"
           :class="{'flex-row space-x-64 h-screen-35' : $device.isDesktopOrTablet, 'flex-col h-screen-auto py-6 space-y-10' : $device.isMobile && $mq === 'sm' , 'flex-col py-10 h-screen-auto space-y-10' : $device.isMobile && $mq === 'md'}">
    <div class="flex flex-col"
         :class="{'space-y-10' : $device.isDesktopOrTablet}">
      <span class="uppercase font-impact text-yellow-orange text-2xl">Звоните - пишите</span>
      <div class="flex flex-col">
        <a href="tel:+79182244461">тел.: 8 (918) 224-44-61</a>
        <span>@ fashiontime_krd</span>
      </div>
    </div>
    <div class="flex flex-col"
         :class="{'space-y-10' : $device.isDesktopOrTablet}">
      <span class="uppercase font-impact text-yellow-orange text-2xl">Наш адрес</span>
      <div class="flex flex-col">
        <span>г. Краснодар,</span>
        <span>ул. Богатырская, 39</span>
      </div>
    </div>
    <div class="flex flex-col"
         :class="{'space-y-10' : $device.isDesktopOrTablet}">
      <span class="uppercase font-impact text-yellow-orange text-2xl">Часы работы</span>
      <div class="flex flex-col">
        <span>Ежедневно</span>
        <span>С 9:00 До 20:00</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactsSection'
}
</script>
