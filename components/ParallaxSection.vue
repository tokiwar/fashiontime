<template>
  <section v-if="SectionData"
           class="flex items-center justify-center h-screen bg-fixed bg-center select-none bg-cover"
           :class="SectionData.bg"
           :style="`background-image: url('${SectionData.bgImage}')`">
    <div
      class="absolute text-white flex flex-col justify-center items-center space-y-4 rounded-2xl px-12 py-8 glassmorphism-light">
      <span class="text-5xl text-white font-kelly">- МОДНАЯ ЦИРЮЛЬНЯ -</span>
      <h1 v-if="SectionData.setTextH1" class="text-9xl text-white font-impact">ВРЕМЯ КРАСОТЫ</h1>
      <span v-else class="text-9xl text-white font-impact">ВРЕМЯ КРАСОТЫ</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ParallaxSection',
  props: ['SectionData']
}
</script>
