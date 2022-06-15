<template>
  <div class="h-screen w-full">
    <Header class="fixed top-0 left-0 w-full glassmorphism z-10"/>
    <main>
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
