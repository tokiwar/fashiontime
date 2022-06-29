<template>
  <div class="flex justify-center items-start"
       :class="{'flex-row space-x-4' : $device.isDesktopOrTablet || mobileLandscape, 'flex-col space-y-2' : mobilePortrait}">
    <nuxt-link class="flex relative" :to="item.link"
               :class="{'w-4/6' : $device.isDesktopOrTablet || mobileLandscape}">
      <div class="absolute left-4 top-4 bg-white py-4 px-6 uppercase text-base rounded-md">{{ item.text }}</div>
      <img class="w-full object-cover rounded-md"
           :class="{'h-72' :$device.isDesktopOrTablet || mobileLandscape, 'h-64' : mobilePortrait }"
           :src="item.img" :alt="item.text" :title="item.text"/>
    </nuxt-link>
    <ul
      :class="{'w-2/6 flex flex-col justify-center items-start space-y-1' : $device.isDesktopOrTablet || mobileLandscape, 'grid grid-cols-2 grid-rows-auto gap-y-1 gap-x-2 w-full' : mobilePortrait}">
      <li v-for="li in item.list" :key="li.key">
        <nuxt-link :to="{'path' : li.link, 'hash' : li.hash}"
                   class="underline hover:no-underline text-lg hover:text-header flex flex-row items-center"
                   :class="{'justify-center' : $device.isDesktopOrTablet || mobileLandscape, 'justify-start' : mobilePortrait}">
          <span>{{ li.text }}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SectionCard',
  props: ['item'],
  computed: {
    mobilePortrait() {
      return this.$device.isMobile && this.$mq === 'sm';
    },
    mobileLandscape() {
      return this.$device.isMobile && this.$mq === 'md'
    }
  }
}
</script>
