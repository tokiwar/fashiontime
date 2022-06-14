<template>
  <section class="bg-main-page bg-cover h-screen w-screen flex flex-col items-start justify-center">
    <span class="text-9xl w-4/6 px-20 text-white font-ametist">ВРЕМЯ КРАСОТЫ</span>
    <span class="text-5xl w-3/6 px-20 text-white">МОДНАЯ ЦИРЮЛЬНЯ</span>
    <div class="flex flex-col space-y-2 py-4">
      <span class="text-2xl px-20 text-white">г. Краснодар, ул. Богатырская, 39</span>
      <span class="text-2xl px-20 text-white">тел.: 8 (918) 224-44-61</span>
      <span class="text-2xl px-20 text-white">@ fashiontime_krd</span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: '«Время красоты» - Главная страница',
      link: [
        {rel: 'canonical', href: 'https://fashiontimekrd.ru/'},
      ]
    }
  },
}
</script>
