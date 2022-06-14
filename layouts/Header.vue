<template>
  <header class="h-24 select-none flex items-center justify-center" itemscope itemtype="https://schema.org/WPHeader">
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
        name: 'О нас',
        link: '/about/'
      },
      {
        key: 2,
        name: 'Контакты',
        link: '/contacts/'
      },
      {
        key: 3,
        name: 'Галерея',
        link: '/gallery/'
      },
    ]
  })
}
</script>
