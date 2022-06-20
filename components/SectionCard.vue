<template>
  <div class="flex flex-row justify-center items-start space-x-4">
    <nuxt-link class="flex relative w-4/6" :to="item.link">
      <div class="absolute left-4 top-4 bg-white py-4 px-6 uppercase text-base rounded-md">{{ item.text }}</div>
      <img class="h-72 w-full object-cover rounded-md" :src="item.img" :alt="item.text" :title="item.text"/>
    </nuxt-link>
    <ul class="w-2/6 flex flex-col justify-center items-start space-y-1">
      <li v-for="li in item.list" :key="li.key">
        <nuxt-link :to="li.link" class="underline hover:no-underline text-lg hover:text-header">{{
            li.text
          }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SectionCard',
  props: ['item']
}
</script>
