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
  data: () => ({
    SectionData: {
      text: 'Парикмахерские услуги',
      setTextH1: true,
    }
  }),
  async asyncData({params, error, $axios, route}) {
    const sectionPageUrl = params.section;
    console.log(sectionPageUrl);
    const section = {
      img: require('@/assets/img/galleryItem.jpg'),
      links: [
        {
          key: 0,
          main: 'От 350 ₽',
          sub: 'Смотреть все акции и цены',
          icon: ''
        },
        {
          key: 1,
          main: 'От 350 ₽',
          sub: 'Смотреть все акции и цены',
          icon: ''
        },
        {
          key: 2,
          main: 'От 350 ₽',
          sub: 'Смотреть все акции и цены',
          icon: ''
        },
        {
          key: 3,
          main: 'От 350р',
          sub: 'Смотреть все акции и цены',
          icon: ''
        },
        {
          key: 4,
          main: 'От 350 ₽',
          sub: 'Смотреть все акции и цены',
          icon: ''
        },
        {
          key: 5,
          main: 'От 350 ₽',
          sub: 'Смотреть все акции и цены',
          icon: ''
        }
      ],
    };
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
    ];
    return {routes, section}
  }
}
</script>
