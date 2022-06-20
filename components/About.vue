<template>
  <section class="h-screen flex flex-row items-center justify-center w-3/6 mx-auto space-x-20 relative">
    <img class="rounded-md" :src="require('@/assets/img/about-pic.jpg')" alt="история" title="история"/>
    <span class="font-sans">Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах. <br>
      Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.</span>
    <h2 class="text-9xl absolute top-3/10 left-auto font-impact uppercase text-yellow-orange">История</h2>
  </section>
</template>
<script>
export default {
  name: 'About'
}
</script>
