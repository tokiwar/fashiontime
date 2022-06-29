<template>
  <div class="flex flex-row space-x-16" v-if="$device.isDesktopOrTablet">
    <div v-if="menu" itemscope itemtype="http://www.schema.org/SiteNavigationElement"
         class="flex flex-row items-center justify-center text-3xl text-yellow-50 space-x-12 font-kelly">
      <nuxt-link v-for="menuItem in menu" :key="menuItem.key" :to="menuItem.link"
                 :class="{'underline pointer-events-none' : menuItem.link === $route.path}"
                 itemprop="itemListElement"
                 itemscope
                 itemtype="https://schema.org/ListItem">{{ menuItem.name }}
        <meta itemprop="name" :content="menuItem.name">
        <meta itemprop="url" :content="menuItem.link">
      </nuxt-link>
    </div>
  </div>
  <div v-else>

  </div>
</template>
<script>
export default {
  name: 'TopMenu',
  props: ['menu']
}
</script>
