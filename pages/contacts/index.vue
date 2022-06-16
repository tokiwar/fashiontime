<template>
  <div>
    <top-section :section-data="SectionData">
      <breadcrumbs :routes="routes"/>
    </top-section>
    <section class="h-screen">
      asdasddf
    </section>
  </div>
</template>
<script>
export default {
  name: 'ContactsPage',
  data: () => ({
    SectionData: {
      text: 'Контакты',
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
        name: 'Контакты',
        route: '/contacts/',
        current: true,
        position: 2
      }
    ];
    return {routes}
  },
}
</script>
