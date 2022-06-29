<template>
  <section v-if="SectionData"
           class="bg-sub-header flex flex-col justify-center items-center space-y-2"
           :class="{'h-screen-30 pt-24' : $device.isDesktopOrTablet, 'h-auto py-4' : $device.isMobile}">
    <template v-if="SectionData.setTextH1">
      <h1 class="text-white font-impact uppercase text-5xl text-center">{{ SectionData.text }}</h1>
      <img :src="require('@/assets/img/breadcrumbs.png')" alt="Хлебные крошки" title="Хлебные крошки"/>
    </template>
    <template v-else>
      <span class="text-white font-impact uppercase text-5xl text-center">{{ SectionData.text }}</span>
      <img :src="require('@/assets/img/breadcrumbs.png')" alt="Хлебные крошки" title="Хлебные крошки"/>
    </template>
    <slot name="breadcrumbs"></slot>
  </section>
</template>
<script>
export default {
  name: 'TopSection',
  props: ['SectionData'],
}
</script>

