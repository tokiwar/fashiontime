<template>
  <div class="bg-section">
    <section class="h-auto flex py-10 flex-row justify-center items-center w-5/6 mx-auto">
      <div
        class="w-full h-screen-50 bg-cover bg-center flex flex-row justify-center items-center bg-sub-header relative rounded-md space-x-36"
      >
        <div class="flex flex-col space-y-8 max-w-1/2 justify-center items-center">
          <ul class="grid grid-rows-2 grid-cols-2 gap-y-4 gap-x-20 text-lg">
            <li class="flex flex-col" v-for="link in section.links" :key="link.key">
              <span class="font-bold">{{ link.main }}</span>
              <span class="text-gray-800">{{ link.sub }}</span>
            </li>
          </ul>
          <a class="px-8 py-4 text-2xl rounded-md bg-header text-white text-center w-full" href="#">Записаться на
            парикмахерские
            услуги</a>
        </div>
        <img class="h-full max-w-1/2"
             :src="require('@/assets/img/beautiful_model_with_long_smooth_flying_blonde_hair_isolated_white.png')"/>
      </div>
    </section>
    <section class="h-auto py-10 flex flex-col items-center justify-center bg-section">
      <ul class="grid grid-rows-auto grid-cols-3 gap-x-12 gap-y-2">
        <li v-for="section in section.sections" :key="section.key">
          <nuxt-link :to="section.link" class="underline hover:no-underline text-lg hover:text-header">{{
              section.text
            }}
          </nuxt-link>
        </li>
      </ul>
    </section>
    <section class="h-auto py-10 flex flex-col items-center justify-center bg-section space-y-8">
      <div class="w-5/6 py-8 px-10 bg-section-gray rounded-md flex flex-row justify-between items-start"
           v-for="section in section.sections" :key="section.key">
        <div class="text-header flex flex-col space-y-2 w-2/6">
          <div class="text-6xl font-bold text-justify">Название</div>
          <div class="italic w-5/6 text-lg">Описание Описание Описание Описание Описание Описание Описание Описание
            Описание Описание
          </div>
          <div class="w-5/6 text-right font-bold text-2xl underline">от 450 ₽</div>
        </div>
        <div class="flex flex-row space-x-8">
          <img class="h-72 w-full object-cover rounded-md" :src="require('@/assets/img/galleryItem.jpg')"/>
          <img class="h-72 w-full object-cover rounded-md" :src="require('@/assets/img/galleryItem.jpg')"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'ServicesSection',
  props: ['section']
}
</script>
