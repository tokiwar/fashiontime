<template>
  <div class="h-auto flex flex-col space-y-10">
    <about-section :section-data="aboutSectionData"/>
    <services :items="services"/>
  </div>
</template>
<script>
export default {
  name: 'About',
  data: () => ({
    aboutSectionData: {
      title: 'История',
      img: require('@/assets/img/about-pic-3.jpg'),
      text: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах. <br>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.'
    },
    services: [
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
    ],
  })
}
</script>
