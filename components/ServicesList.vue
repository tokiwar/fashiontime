<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="item in items" :key="item.key" class="w-72 h-72 cursor-pointer relative"
         :class="{'col-span-2 w-auto' : (item.key === 1)}">
      <img class="h-full w-full object-cover" :src="item.img" :alt="item.text" :title="item.text"/>
      <span class="absolute bottom-4 left-4 text-xl">{{ item.text }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ServicesList',
  data: () => ({
    items: [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-1'
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-2'
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-3'
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-4'
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-5'
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-6'
      },
      {
        key: 6,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'text-7'
      }
    ]
  })
}
</script>
