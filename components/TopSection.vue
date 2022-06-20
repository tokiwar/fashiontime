<template>
  <section v-if="SectionData" class="h-screen-30 bg-sub-header flex flex-col justify-center items-center pt-24 space-y-2">
    <template v-if="SectionData.setTextH1">
      <h1 class="text-white font-impact uppercase text-5xl">{{ SectionData.text }}</h1>
      <img :src="require('@/assets/img/breadcrumbs.png')"/>
    </template>
    <template v-else>
      <span class="text-white font-impact uppercase text-5xl">{{ SectionData.text }}</span>
      <img :src="require('@/assets/img/breadcrumbs.png')"/>
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

