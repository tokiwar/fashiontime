<template>
  <section class="h-auto py-10 flex flex-col justify-center items-center">
    <div class="grid grid-cols-1 grid-rows-3 gap-y-8 w-4/6">
      <template v-for="item in items">
        <section-card :key="item.key" :item="item"/>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ServicesCards',
  data: () => ({
    items: [
      {
        key: 0,
        text: 'Парикмахерские услуги',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/parikmakherskie-uslugi/',
        list: [
          {
            key: 0,
            text: 'Стрижка',
            link: '/services/parikmakherskie-uslugi/strizhka/',
            icon: ''
          },
          {
            key: 1,
            text: 'Окрашивание волос',
            link: '/services/parikmakherskie-uslugi/okrashivanie-volos/',
            icon: ''
          },
          {
            key: 2,
            text: 'Уход, лечение, диагностика',
            link: '/services/parikmakherskie-uslugi/ukhod-lechenie-diagnostika/',
            icon: ''
          },
          {
            key: 3,
            text: 'Укладка',
            link: '/services/parikmakherskie-uslugi/ukladka/',
            icon: ''
          },
          {
            key: 4,
            text: 'Прически',
            link: '/services/parikmakherskie-uslugi/pricheski/',
            icon: ''
          },
          {
            key: 5,
            text: 'Биозавивка волос',
            link: '/services/parikmakherskie-uslugi/biozavivka-volos/',
            icon: ''
          },
          {
            key: 6,
            text: 'Кератиновое выпрямление волос',
            link: '/services/parikmakherskie-uslugi/keratinovoe-vypryamlenie-volos/',
            icon: ''
          },
        ]
      },
      {
        key: 1,
        text: 'Ногтевой сервис',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/nogtevoy-servis/',
        list: [
          {
            key: 0,
            text: 'Маникюр',
            link: '/services/nogtevoy-servis/manikyur/',
            icon: ''
          },
          {
            key: 1,
            text: 'Педикюр',
            link: '/services/nogtevoy-servis/pedikyur/',
            icon: ''
          },
          {
            key: 2,
            text: 'Покрытие ногтей',
            link: '/services/nogtevoy-servis/pokrytie-nogtey/',
            icon: ''
          },
          {
            key: 3,
            text: 'Наращивание ногтей',
            link: '/services/nogtevoy-servis/narashchivanie-nogtey/',
            icon: ''
          },
          {
            key: 4,
            text: 'Медицинский педикюр',
            link: '/services/nogtevoy-servis/meditsinskiy-pedikyur/',
            icon: ''
          },
          {
            key: 5,
            text: 'Уход и лечение',
            link: '/services/nogtevoy-servis/ukhod-i-lechenie/',
            icon: ''
          },
        ]
      },
      {
        key: 2,
        text: 'Остальные услуги',
        img: require('@/assets/img/galleryItem.jpg'),
        link: '/services/ostalnye-uslugi/',
        list: [
          {
            key: 0,
            text: 'Брови',
            link: '/services/ostalnye-uslugi/brovi/',
            icon: ''
          },
          {
            key: 1,
            text: 'Макияж',
            link: '/services/ostalnye-uslugi/makiyazh/',
            icon: ''
          },
          {
            key: 2,
            text: 'Ресницы',
            link: '/services/ostalnye-uslugi/resnitsy/',
            icon: ''
          },
        ]
      },
    ]
  })
}
</script>
