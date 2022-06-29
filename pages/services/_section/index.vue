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
            link: '/services/parikmakherskie-uslugi/',
            icon: 'zhenskie-strizhki',
            hash: 'zhenskie-strizhki'
          },
          {
            key: 1,
            text: 'Мужские стрижки',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'muzhskie-strizhki',
            hash: 'muzhskie-strizhki'
          },
          {
            key: 2,
            text: 'Оформление бороды',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'oformlenie-borody',
            hash: 'oformlenie-borody'
          },
          {
            key: 3,
            text: 'Детские стрижки',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'detskie-strizhki',
            hash: 'detskie-strizhki'
          },
          {
            key: 4,
            text: 'Окрашивание волос',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'okrashivanie-volos',
            hash: 'okrashivanie-volos'
          },
          {
            key: 5,
            text: 'Химическая завивка',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'khimicheskaya-zavivka',
            hash: 'khimicheskaya-zavivka'
          },
          {
            key: 6,
            text: 'Кератиновое выпрямление',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'keratinovoe-vypryamlenie',
            hash: 'keratinovoe-vypryamlenie'
          },
          {
            key: 7,
            text: 'Укладка волос',
            link: '/services/parikmakherskie-uslugi/',
            icon: 'ukladka-volos',
            hash: 'ukladka-volos'
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
            key: 4,
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
            key: 4,
            name: 'Ногтевой сервис',
            route: '/services/nogtevoy-servis/',
            current: true,
            position: 3
          },
        ],
        sections: [
          {
            key: 0,
            text: 'Маникюр',
            link: '/services/nogtevoy-servis/',
            icon: 'manicure_2',
            hash: 'manikyur'
          },
          {
            key: 1,
            text: 'Педикюр',
            link: '/services/nogtevoy-servis/',
            icon: 'pedicure',
            hash: 'pedikyur'
          },
          {
            key: 2,
            text: 'Покрытие ногтей',
            link: '/services/nogtevoy-servis/',
            icon: 'nails',
            hash: 'pokrytie-nogtey'
          },
          {
            key: 3,
            text: 'Наращивание ногтей',
            link: '/services/nogtevoy-servis/',
            icon: 'nails_2',
            hash: 'narashchivanie-nogtey'
          },
          {
            key: 4,
            text: 'Медицинский педикюр',
            link: '/services/nogtevoy-servis/',
            icon: 'meditsinskiy-pedikyur',
            hash: 'meditsinskiy-pedikyur'
          },
          {
            key: 5,
            text: 'Уход и лечение',
            link: '/services/nogtevoy-servis/',
            icon: 'ukhod-i-lechenie-manicure',
            hash: 'ukhod-i-lechenie'
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
            icon: 'free'
          },
          {
            key: 2,
            main: 'Стерильное оборудование',
            sub: '',
            icon: 'manicure'
          },
          {
            key: 3,
            main: 'Материалы премиум класса',
            sub: '',
            icon: 'premium_hands'
          },
        ],
      },
      'ostalnye-uslugi': {
        img: require('@/assets/img/other.png'),
        data: {
          text: 'Остальные услуги',
          setTextH1: true,
        },
        sections: [
          {
            key: 0,
            text: 'Окрашивание бровей',
            link: '/services/ostalnye-uslugi/',
            icon: 'okrashivanie-brovey',
            hash: 'okrashivanie-brovey'
          },
          {
            key: 1,
            text: 'Макияж',
            link: '/services/ostalnye-uslugi/',
            icon: 'makeup',
            hash: 'makiyazh'
          },
          {
            key: 2,
            text: 'Наращивание ресниц',
            link: '/services/ostalnye-uslugi/',
            icon: 'narashchivanie-resnits',
            hash: 'narashchivanie-resnits'
          },
          {
            key: 3,
            text: 'Окрашивание ресниц',
            link: '/services/ostalnye-uslugi/',
            icon: 'okrashivanie-resnits',
            hash: 'okrashivanie-resnits'
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
            key: 4,
            name: 'Остальные услуги',
            route: '/services/ostalnye-uslugi/',
            current: true,
            position: 3
          },
        ],
        links: [
          {
            key: 0,
            main: 'Бесплатная консультация',
            sub: '',
            icon: 'free'
          },
          {
            key: 1,
            main: 'Профессиональная косметика',
            sub: '',
            icon: 'premium_other'
          },
          {
            key: 2,
            main: 'Стерильное оборудование и инструменты',
            sub: '',
            icon: 'clean'
          },
          {
            key: 3,
            main: 'Сертифицированные мастера',
            sub: '',
            icon: 'cert'
          }
        ],
      }
    };
    const SectionData = sections[sectionPageUrl].data;
    const section = sections[sectionPageUrl];
    const routes = sections[sectionPageUrl].routes;
    return {section, routes, SectionData}
  }
}
</script>
