<template>
  <div class="">
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionData"/>
    <NonParallaxSection v-else :section-data="sectionData"/>
    <about/>
    <services :items="services"/>
    <gallery :items="galleryItems"/>
    <feedback/>
    <contacts/>
    <client-only>
      <store-map/>
    </client-only>
  </div>
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
  data: () => ({
    services: [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Стрижка',
        link: '/services/parikmakherskie-uslugi/strizhka/',
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Окрашивание волос',
        link: '/services/parikmakherskie-uslugi/okrashivanie-volos/',
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Маникюр',
        link: '/services/nogtevoy-servis/manikyur/',
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Педикюр',
        link: '/services/nogtevoy-servis/pedikyur/',
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Брови',
        link: '/services/ostalnye-uslugi/brovi/',
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Макияж',
        link: '/services/ostalnye-uslugi/makiyazh/',
      },
      {
        key: 6,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Укладка',
        link: '/services/parikmakherskie-uslugi/ukladka/',
      }
    ],
    galleryItems: [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg')
      }
    ],
    sectionData: {
      bg: '',
      bgImage: require('@/assets/img/main-page-2.jpg'),
      setTextH1: true
    }
  })
}
</script>
