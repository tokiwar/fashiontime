<template>
  <section class="h-auto flex flex-col justify-center items-center">
    <div class="w-full h-screen-50 bg-cover bg-center flex flex-col justify-center items-start space-y-8"
         :style="`background-image: url('${section.img}')`">
      <ul class="px-40 grid grid-rows-2 grid-cols-2 gap-y-8 gap-x-20 text-lg">
        <li class="flex flex-col" v-for="link in section.links">
          <span class="font-bold">{{ link.main }}</span>
          <span class="text-gray-800">{{ link.sub }}</span>
        </li>
      </ul>
      <a class="mx-40 px-8 py-4 text-xl rounded-md bg-yellow-dark" href="#">Записаться на парикмахерские услуги</a>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ServicesSection',
  props: ['section']
}
</script>
