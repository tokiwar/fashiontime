<template>
  <nav v-if="routes">
    <ul class="w-max flex flex-row font-sans font-bold"
        :class="{'space-x-4 text-xl' : $device.isDesktopOrTablet || mobileLandscape, 'text-base space-x-2' : mobilePortrait}"
        itemscope itemtype="https://schema.org/BreadcrumbList">
      <li v-for="route in routes" :key="route.key"
          :itemprop="route.name ? 'itemListElement' : false"
          :itemscope="route.name ? 'itemscope' : false"
          :itemtype="route.name ? 'https://schema.org/ListItem' : false">
        <meta itemprop="position" v-if="route.name" :content="route.position">
        <meta itemprop="name" v-if="route.name" :content="route.name">
        <nuxt-link class="hover:underline hover:text-white" itemprop="item" :to="route.route"
                   v-if="route.route"
                   :class="{'underline pointer-events-none text-white' : route.current, 'text-header' : !route.current}">
          {{ route.name }}
        </nuxt-link>
        <span v-else class="text-gray-100">|</span>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Breadcrumbs',
  props: ['routes'],
  computed: {
    mobilePortrait() {
      return this.$device.isMobile && this.$mq === 'sm';
    },
    mobileLandscape() {
      return this.$device.isMobile && this.$mq === 'md'
    }
  }
}
</script>
