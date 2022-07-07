<template>
  <div class="">
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionData"/>
    <NonParallaxSection v-else :section-data="sectionData"/>
    <about-section :section-data="aboutSectionData"/>
    <services :items="services"/>
    <gallery :items="galleryItems"/>
    <feedback/>
    <contacts-section/>
    <certificate-section/>
    <reviews-section/>
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
    aboutSectionData: {
      title: 'История',
      img: require('@/assets/img/about-pic-3.jpg'),
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах. <br>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.'
    },
    services: [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Женские стрижки',
        link: '/services/parikmakherskie-uslugi/',
        icon: '',
        hash: 'zhenskie-strizhki'
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Окрашивание волос',
        link: '/services/parikmakherskie-uslugi/',
        icon: '',
        hash: 'okrashivanie-volos'
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Маникюр',
        link: '/services/nogtevoy-servis/',
        icon: '',
        hash: 'manikyur'
      },
      {
        key: 3,
        text: 'Педикюр',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/nogtevoy-servis/',
        icon: '',
        hash: 'pedikyur'
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Окрашивание бровей',
        link: '/services/ostalnye-uslugi/',
        icon: '',
        hash: 'okrashivanie-brovey'
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Макияж',
        link: '/services/ostalnye-uslugi/',
        icon: '',
        hash: 'makiyazh'
      },
      {
        key: 6,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Окрашивание ресниц',
        link: '/services/ostalnye-uslugi/',
        icon: '',
        hash: 'okrashivanie-resnits'
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
