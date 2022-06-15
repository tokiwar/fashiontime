<template>
  <div class="grid grid-cols-3 grid-rows-auto gap-4 w-3/6">
    <div v-for="item in items" :key="item.key" class="w-72 h-72 cursor-pointer">
      <img class="h-full w-full object-cover" :src="item.img"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GalleryItems',
  data: () => ({
    items: [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg')
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg')
      }
    ]
  })
}
</script>
