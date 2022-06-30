<template>
  <div class="h-screen w-full">
    <Header class=""
            :class="{'fixed top-0 left-0 w-full z-20' : $device.isDesktopOrTablet, 'glassmorphism' : $route.path === '/' && !$device.isMobile, 'bg-header' : $route.path !== '/' || $device.isMobile}"/>
    <main :class="{'max-w-screen-xl': $device.isMobile}">
      <Nuxt/>
    </main>
    <Footer/>
  </div>
</template>
<script>
import Header from "@/layouts/Header"
import Footer from "@/layouts/Footer"

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      bodyAttrs: {
        itemscope: '',
        itemtype: 'https://schema.org/WebPage'
      }
    }
  },
}
</script>
