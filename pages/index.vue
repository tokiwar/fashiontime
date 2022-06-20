<template>
  <div>
    <ParallaxSection v-if="$device.isDesktop" :section-data="sectionData"/>
    <about/>
    <services/>
    <gallery/>
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
    sectionData: {
      bg: '',
      bgImage: require('@/assets/img/main-page-2.jpg'),
      setTextH1: true
    }
  })
}
</script>
