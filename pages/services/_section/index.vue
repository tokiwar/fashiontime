<template>
  <div>
    <top-section :section-data="SectionData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </top-section>
    <services-section :section="section"/>
  </div>
</template>
<script>
export default {
  data: () => ({}),
  async asyncData({params, error, $axios, route}) {
    const sectionPageUrl = params.section;
    const sections = {
      'parikmakherskie-uslugi': {
        img: require('@/assets/img/hair.png'),
        data: {
          text: 'Парикмахерские услуги',
          setTextH1: true,
        },
        sections: [
          {
            key: 0,
            text: 'Женские стрижки',
            link: '/services/parikmakherskie-uslugi/zhenskie-strizhki/',
            icon: 'zhenskie-strizhki'
          },
          {
            key: 1,
            text: 'Мужские стрижки',
            link: '/services/parikmakherskie-uslugi/muzhskie-strizhki/',
            icon: 'muzhskie-strizhki'
          },
          {
            key: 2,
            text: 'Оформление бороды',
            link: '/services/parikmakherskie-uslugi/oformlenie-borody/',
            icon: 'oformlenie-borody'
          },
          {
            key: 3,
            text: 'Детские стрижки',
            link: '/services/parikmakherskie-uslugi/detskie-strizhki/',
            icon: 'detskie-strizhki'
          },
          {
            key: 4,
            text: 'Окрашивание волос',
            link: '/services/parikmakherskie-uslugi/okrashivanie-volos/',
            icon: 'okrashivanie-volos'
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
            icon: 'ukladka-volos'
          },
          {
            key: 8,
            text: 'Уход и лечение',
            link: '/services/parikmakherskie-uslugi/ukhod-i-lechenie/',
            icon: 'ukhod-i-lechenie'
          },
        ],
        routes: [
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
            position: 2
          },
          {
            key: 3,
          },
          {
            key: 2,
            name: 'Парикмахерские услуги',
            route: '/services/parikmakherskie-uslugi/',
            current: true,
            position: 3
          },
        ],
        links: [
          {
            key: 0,
            main: 'Стрижки от 500 ₽',
            sub: '',
            icon: 'ruble'
          },
          {
            key: 1,
            main: 'Бесплатная консультация',
            sub: '',
            icon: 'free'
          },
          {
            key: 2,
            main: 'Профессиональная косметика для ухода за волосами',
            sub: '',
            icon: 'care'
          },
          {
            key: 3,
            main: 'Итальянские красители премиум класса',
            sub: '',
            icon: 'premium'
          },
          {
            key: 4,
            main: 'Помощь в подборе подходящего стиля',
            sub: '',
            icon: 'style'
          },
          {
            key: 5,
            main: 'Сертифицированные мастера',
            sub: '',
            icon: 'cert'
          }
        ],
      },
      'nogtevoy-servis': {
        img: require('@/assets/img/hands_3.png'),
        data: {
          text: 'Ногтевой сервис',
          setTextH1: true,
        },
        routes: [
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
            position: 2
          },
          {
            key: 3,
          },
          {
            key: 2,
            name: 'Ногтевой сервис',
            route: '/services/nogtevoy-servis/',
            current: true,
            position: 3
          },
        ],
        links: [
          {
            key: 0,
            main: 'Маникюр от 500 ₽',
            sub: '',
            icon: 'ruble'
          },
          {
            key: 1,
            main: 'Бесплатная консультация',
            sub: '',
            icon: 'premium'
          },
          {
            key: 1,
            main: 'Стерильное оборудование',
            sub: '',
            icon: 'free'
          },
          {
            key: 3,
            main: 'Материалы премиум класса',
            sub: '',
            icon: 'care'
          },
        ],
      },
      'ostalnye-uslugi': {}
    };
    const SectionData = sections[sectionPageUrl].data;
    const section = sections[sectionPageUrl];
    const routes = sections[sectionPageUrl].routes;
    return {section, routes, SectionData}
  }
}
</script>
