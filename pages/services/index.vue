<template>
  <div>
    <top-section :section-data="SectionData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </top-section>
    <services-cards :items="items"/>
  </div>
</template>
<script>
export default {
  name: 'ServicesPage',
  data: () => ({
    SectionData: {
      text: 'Услуги',
      setTextH1: true
    },
    items: [
      {
        key: 0,
        text: 'Парикмахерские услуги',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/parikmakherskie-uslugi/',
        list: [
          {
            key: 0,
            text: 'Женские стрижки',
            link: '/services/parikmakherskie-uslugi/zhenskie-strizhki/',
            icon: ''
          },
          {
            key: 1,
            text: 'Мужские стрижки',
            link: '/services/parikmakherskie-uslugi/muzhskie-strizhki/',
            icon: ''
          },
          {
            key: 2,
            text: 'Оформление бороды',
            link: '/services/parikmakherskie-uslugi/oformlenie-borody/',
            icon: ''
          },
          {
            key: 3,
            text: 'Детские стрижки',
            link: '/services/parikmakherskie-uslugi/detskie-strizhki/',
            icon: ''
          },
          {
            key: 4,
            text: 'Окрашивание волос',
            link: '/services/parikmakherskie-uslugi/okrashivanie-volos/',
            icon: ''
          },
          {
            key: 5,
            text: 'Химическая завивка',
            link: '/services/parikmakherskie-uslugi/khimicheskaya-zavivka/',
            icon: 'khimicheskaya-zavivka'
          },
          {
            key: 6,
            text: 'Кератиновое выпрямление',
            link: '/services/parikmakherskie-uslugi/keratinovoe-vypryamlenie/',
            icon: 'keratinovoe-vypryamlenie'
          },
          {
            key: 7,
            text: 'Укладка волос',
            link: '/services/parikmakherskie-uslugi/ukladka-volos/',
            icon: ''
          },
          {
            key: 8,
            text: 'Уход и лечение',
            link: '/services/parikmakherskie-uslugi/ukhod-i-lechenie/',
            icon: ''
          },
        ]
      },
      {
        key: 1,
        text: 'Ногтевой сервис',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/nogtevoy-servis/',
        list: [
          {
            key: 0,
            text: 'Маникюр',
            link: '/services/nogtevoy-servis/manikyur/',
            icon: ''
          },
          {
            key: 1,
            text: 'Педикюр',
            link: '/services/nogtevoy-servis/pedikyur/',
            icon: ''
          },
          {
            key: 2,
            text: 'Покрытие ногтей',
            link: '/services/nogtevoy-servis/pokrytie-nogtey/',
            icon: ''
          },
          {
            key: 3,
            text: 'Наращивание ногтей',
            link: '/services/nogtevoy-servis/narashchivanie-nogtey/',
            icon: ''
          },
          {
            key: 4,
            text: 'Медицинский педикюр',
            link: '/services/nogtevoy-servis/meditsinskiy-pedikyur/',
            icon: ''
          },
          {
            key: 5,
            text: 'Уход и лечение',
            link: '/services/nogtevoy-servis/ukhod-i-lechenie/',
            icon: ''
          },
        ]
      },
      {
        key: 2,
        text: 'Остальные услуги',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/ostalnye-uslugi/',
        list: [
          {
            key: 0,
            text: 'Брови',
            link: '/services/ostalnye-uslugi/brovi/',
            icon: ''
          },
          {
            key: 1,
            text: 'Макияж',
            link: '/services/ostalnye-uslugi/makiyazh/',
            icon: ''
          },
          {
            key: 2,
            text: 'Ресницы',
            link: '/services/ostalnye-uslugi/resnitsy/',
            icon: ''
          },
        ]
      },
    ]
  }),
  async asyncData({$axios, route}) {
    const routes = [
      {
        key: 0,
        name: 'Главная',
        route: '/',
        position: 1
      },
      {
        key: 1,
      },
      {
        key: 2,
        name: 'Услуги',
        route: '/services/',
        current: true,
        position: 2
      }
    ];
    return {routes}
  },
}
</script>
