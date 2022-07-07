<template>
  <div>
    <top-section :section-data="SectionData">
      <template v-slot:breadcrumbs>
        <breadcrumbs :routes="routes"/>
      </template>
    </top-section>
    <gallery-slider :items="items" :tags="tags"/>
  </div>
</template>
<script>
export default {
  name: 'GalleryPage',
  data: () => ({
    SectionData: {
      text: 'Галерея',
      setTextH1: true
    }
  }),
  async asyncData({$axios, route}) {
    const routes = [
      {
        key: 0,
        name: 'Главная',
        route: '/',
        position: 1
      },
      {
        key: 1,
      },
      {
        key: 2,
        name: 'Галерея',
        route: '/gallery/',
        current: true,
        position: 2
      }
    ];
    const items = [
      {
        key: 0,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag0'
      },
      {
        key: 1,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag0'
      },
      {
        key: 2,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag0'
      },
      {
        key: 3,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag0'
      },
      {
        key: 4,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag1'
      },
      {
        key: 5,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag1'
      },
      {
        key: 6,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag1'
      },
      {
        key: 7,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag1'
      },
      {
        key: 8,
        img: require('@/assets/img/galleryItem.jpg'),
        tag: 'tag1'
      },
    ];
    const tags = [
      {
        key: 0,
        name: 'tag0'
      },
      {
        key: 1,
        name: 'tag1',
      },
      {
        key: 2,
        name: 'tag2'
      }
    ];
    return {routes, items, tags}
  },
}
</script>
