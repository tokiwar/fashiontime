<template>
  <header class="h-24 select-none flex items-center justify-center" itemscope itemtype="https://schema.org/WPHeader">
    <div class="absolute left-1/20 my-auto flex flex-row justify-center items-center space-x-4">
      <logo class="h-20 w-20" :scissors="'#fffbeb'" :clock="'#fffbeb'"/>
      <span class="text-yellow-50 font-kelly text-3xl">Время<br>красоты</span>
    </div>
    <div class="absolute right-1/20 my-auto text-yellow-50 font-kelly text-2xl">
      <a href="tel:+79182244461">тел.: 8 (918) 224-44-61</a>
    </div>
    <top-menu :menu="menu"/>
  </header>
</template>
<script>
export default {
  name: 'Header',
  data: () => ({
    menu: [
      {
        key: 0,
        name: 'Главная',
        link: '/'
      },
      {
        key: 1,
        name: 'Услуги',
        link: '/services/'
      },
      {
        key: 2,
        name: 'О нас',
        link: '/about/'
      },
      {
        key: 3,
        name: 'Контакты',
        link: '/contacts/'
      },
      {
        key: 4,
        name: 'Галерея',
        link: '/gallery/'
      },
    ]
  })
}
</script>
