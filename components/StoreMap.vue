<template>
  <yandex-map @map-was-initialized="displayMap" v-show="showMap"
              class="h-screen-50" :coords="initCoords" :zoom="17"
              :scroll-zoom="false">
    <ymap-marker
      v-for="marker in items"
      :coords="marker.coords"
      :marker-id="marker.key"
      :hint-content="marker.hint"
      :key="marker.key"
    />
  </yandex-map>
</template>
<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps'

export default {
  name: 'StoreMap',
  components: {yandexMap, ymapMarker},
  data: () => ({
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: require('~/assets/img/icon.png'),
      imageSize: [30, 30],
      imageOffset: [0, -15],
    },
    initCoords: [
      45.058976, 39.130138
    ],
    items: [
      {
        key: 0,
        coords: [45.058976, 39.130138],
        hint: 'Время красоты'
      }
    ],
    showMap: false,
  }),
  methods: {
    displayMap() {
      this.showMap = true;
    },
  }
}
</script>
