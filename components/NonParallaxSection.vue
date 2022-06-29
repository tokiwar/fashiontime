<template>
  <section v-if="SectionData" class="relative flex items-center justify-center">
    <img class="" :src="SectionData.bgImage" alt="Время красоты" title="Время красоты"/>
    <div
      class="m-auto absolute text-white flex flex-col justify-center items-center space-y-2 rounded-2xl px-10 py-4 glassmorphism-light">
      <span class="text-xl text-white font-kelly">- МОДНАЯ ЦИРЮЛЬНЯ -</span>
      <h1 v-if="SectionData.setTextH1" class="text-3xl text-white font-impact">ВРЕМЯ КРАСОТЫ</h1>
      <span v-else class="text-3xl text-white font-impact">ВРЕМЯ КРАСОТЫ</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NonParallaxSection',
  props: ['SectionData']
}
</script>
