<template>
  <header class="select-none flex items-center justify-center" itemscope itemtype="https://schema.org/WPHeader"
          :class="{'h-24' :$device.isDesktopOrTablet, 'h-16' :$device.isMobile}">
    <div class="flex flex-row justify-center items-center space-x-4"
         :class="{'absolute left-1/20 my-auto' : $device.isDesktopOrTablet}">
      <logo :class="{'h-20 w-20' : $device.isDesktopOrTablet, 'h-12 w-12' : $device.isMobile}" :scissors="'#fffbeb'"
            :clock="'#fffbeb'"/>
      <span class="text-yellow-50 font-kelly"
            :class="{'text-3xl' : $device.isDesktopOrTablet, 'text-2xl leading-none' : $device.isMobile}">Время<br>красоты</span>
    </div>
    <div class="absolute right-1/20 my-auto text-yellow-50 font-kelly text-2xl" v-if="$device.isDesktopOrTablet">
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
