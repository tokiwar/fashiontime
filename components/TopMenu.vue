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
  <div class="absolute text-l font-white uppercase right-0 font-kelly" v-else>
    <button class="hamburger hamburger--spin" :class="{'is-active': opened}" type="button" @click.prevent="close">
      <span class="hamburger-box"><span class="hamburger-inner"/></span>
    </button>
    <transition name="fade">
      <div class="flex w-full flex-col text-2xl fixed bg-sub-header items-start justify-items right-0 z-20"
           v-if="opened">
        <NuxtLink class="px-4 py-1 flex text-orange-dark flex-row justify-center items-center space-x-2 hover:underline hover:text-white" @click.native="close"
                  :class="{'underline pointer-events-none text-white' : menuItem.link === $route.path}"
                  itemprop="itemListElement"
                  itemscope
                  itemtype="https://schema.org/ListItem"
                  v-for="menuItem in menu"
                  :key="menuItem.key"
                  :to="menuItem.link">
          <span>{{ menuItem.name }}</span>
          <meta itemprop="name" :content="menuItem.name">
          <meta itemprop="url" :content="menuItem.link">
        </NuxtLink>
      </div>
    </transition>
  </div>
</template>
<script>
import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'TopMenu',
  props: ['menu'],
  data: () => ({
    opened: false,
  }),
  methods: {
    ...mapActions([
      "toggleOverflow"
    ]),
    ...mapMutations([
      "openMenu",
      "closeMenu",
    ]),
    close() {
      this.opened = !this.opened;
      this.toggleOverflow();
      if (this.opened) {
        this.openMenu();
      } else {
        this.closeMenu();
      }
    }
  }
}
</script>
