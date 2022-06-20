<template>
  <div class="grid grid-cols-4 gap-4">
    <nuxt-link :to="item.link" v-for="item in items" :key="item.key" class="w-72 h-72 cursor-pointer relative"
         :class="{'col-span-2 w-auto' : (item.key === 1)}">
      <img class="h-full w-full object-cover rounded-md" :src="item.img" :alt="item.text" :title="item.text"/>
      <span class="absolute bottom-4 left-4 text-base bg-white py-2 px-4 uppercase rounded-md">{{ item.text }}</span>
    </nuxt-link>
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
        text: 'Стрижка',
        link: '/services/parikmakherskie-uslugi/strizhka/',
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Окрашивание волос',
        link: '/services/parikmakherskie-uslugi/okrashivanie-volos/',
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Маникюр',
        link: '/services/nogtevoy-servis/manikyur/',
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Педикюр',
        link: '/services/nogtevoy-servis/pedikyur/',
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Брови',
        link: '/services/ostalnye-uslugi/brovi/',
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Макияж',
        link: '/services/ostalnye-uslugi/makiyazh/',
      },
      {
        key: 6,
        img: require('@/assets/img/galleryItem.jpg'),
        text: 'Укладка',
        link: '/services/parikmakherskie-uslugi/ukladka/',
      }
    ]
  })
}
</script>
