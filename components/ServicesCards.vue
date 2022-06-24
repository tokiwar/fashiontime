<template>
  <section class="h-auto py-10 flex flex-col justify-center items-center">
    <div class="grid grid-cols-2 grid-rows-auto gap-y-8 w-4/6">
      <template v-for="item in items">
        <section-card :key="item.key" :item="item"/>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ServicesCards',
  props: ['items'],
  data: () => ({
  })
}
</script>
