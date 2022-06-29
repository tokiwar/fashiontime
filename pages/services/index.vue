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
        img: require('@/assets/img/parikmakherskie-uslugi.jpg'),
        link: '/services/parikmakherskie-uslugi/',
        list: [
          {
            key: 0,
            text: 'Женские стрижки',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'zhenskie-strizhki'
          },
          {
            key: 1,
            text: 'Мужские стрижки',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'muzhskie-strizhki'
          },
          {
            key: 2,
            text: 'Оформление бороды',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'oformlenie-borody'
          },
          {
            key: 3,
            text: 'Детские стрижки',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'detskie-strizhki'
          },
          {
            key: 4,
            text: 'Окрашивание волос',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'okrashivanie-volos'
          },
          {
            key: 5,
            text: 'Химическая завивка',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'khimicheskaya-zavivka'
          },
          {
            key: 6,
            text: 'Кератиновое выпрямление',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'keratinovoe-vypryamlenie'
          },
          {
            key: 7,
            text: 'Укладка волос',
            link: '/services/parikmakherskie-uslugi/',
            icon: '',
            hash: 'ukladka-volos'
          }
        ]
      },
      {
        key: 1,
        text: 'Ногтевой сервис',
        img: require('@/assets/img/nogtevoy-servis.jpg'),
        link: '/services/nogtevoy-servis/',
        list: [
          {
            key: 0,
            text: 'Маникюр',
            link: '/services/nogtevoy-servis/',
            icon: '',
            hash: 'manikyur'
          },
          {
            key: 1,
            text: 'Педикюр',
            link: '/services/nogtevoy-servis/',
            icon: '',
            hash: 'pedikyur'
          },
          {
            key: 2,
            text: 'Покрытие ногтей',
            link: '/services/nogtevoy-servis/',
            icon: '',
            hash: 'pokrytie-nogtey'
          },
          {
            key: 3,
            text: 'Наращивание ногтей',
            link: '/services/nogtevoy-servis/',
            icon: '',
            hash: 'narashchivanie-nogtey'
          },
          {
            key: 4,
            text: 'Медицинский педикюр',
            link: '/services/nogtevoy-servis/',
            icon: '',
            hash: 'meditsinskiy-pedikyur'
          },
          {
            key: 5,
            text: 'Уход и лечение',
            link: '/services/nogtevoy-servis/',
            icon: '',
            hash: 'ukhod-i-lechenie'
          },
        ]
      },
      {
        key: 2,
        text: 'Остальные услуги',
        img: require('@/assets/img/ostalnye-uslugi.jpg'),
        link: '/services/ostalnye-uslugi/',
        list: [
          {
            key: 0,
            text: 'Окрашивание бровей',
            link: '/services/ostalnye-uslugi/',
            icon: '',
            hash: 'okrashivanie-brovey'
          },
          {
            key: 1,
            text: 'Макияж',
            link: '/services/ostalnye-uslugi/',
            icon: '',
            hash: 'makiyazh'
          },
          {
            key: 2,
            text: 'Наращивание ресниц',
            link: '/services/ostalnye-uslugi/',
            icon: '',
            hash: 'narashchivanie-resnits'
          },
          {
            key: 3,
            text: 'Окрашивание ресниц',
            link: '/services/ostalnye-uslugi/',
            icon: '',
            hash: 'okrashivanie-resnits'
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
