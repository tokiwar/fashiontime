<template>
  <div>
    <top-section :section-data="SectionData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </top-section>
    <about/>
  </div>
</template>
<script>
export default {
  name: 'AboutPage',
  data: () => ({
    SectionData: {
      text: 'О нас',
      setTextH1: true
    }
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
        name: 'О нас',
        route: '/about/',
        current: true,
        position: 2
      }
    ];
    return {routes}
  },
}
</script>
