<template>
  <section v-if="SectionData" class="h-screen-15 bg-yellow-orange flex flex-col justify-center items-center pt-24">
    <h1 class="text-white font-impact uppercase text-5xl" v-if="SectionData.setTextH1">{{ SectionData.text }}</h1>
    <span class="text-white font-impact uppercase text-5xl" v-else>{{ SectionData.text }}</span>
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: 'TopSection',
  props: ['SectionData']
}
</script>

