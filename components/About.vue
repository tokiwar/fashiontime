<template>
  <section class="relative flex flex-col items-center justify-center relative" :class="{'py-8 h-auto' : $device.isMobile}">
    <h2 class="font-impact uppercase text-yellow-orange z-10"
        :class="{'text-9xl top-3/10 mx-auto absolute' : $device.isDesktopOrTablet, 'text-8xl' : $device.isMobile }">
      История</h2>
    <div class="flex items-center justify-center mx-auto relative"
         :class="{'flex-row space-x-20 h-screen w-3/6' : $device.isDesktopOrTablet, 'flex-col space-y-4 w-5/6 pt-8' : $device.isMobile && $mq === 'sm', 'flex-row space-x-4 w-5/6 pt-8' : $device.isMobile && $mq === 'md'}">
      <img class="rounded-md object-cover" :class="{'w-136' : $device.isDesktopOrTablet, 'h-96' : $device.isMobile}" :src="require('@/assets/img/about-pic-3.jpg')" alt="история"
           title="история"/>
      <span class="font-sans" :class="{'text-base w-11/12' : $device.isMobile}">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах. <br>
      Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'About'
}
</script>
