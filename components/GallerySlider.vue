<template>
  <section class="h-auto py-10 flex flex-col justify-center items-center space-y-10">
    <div class="flex flex-row space-x-10">
      <button v-for="tag in tags" :key="tag.key" class="border-4 rounded-lg px-8 py-2 text-xl"
              @click="selectTag(tag.name)"
              :class="{'bg-black' : isTagSelected(tag.name)}">
        {{ tag.name }}
      </button>
    </div>
    <div class="grid grid-cols-3 grid-rows-auto gap-4">
      <div v-for="item in items" :key="item.key" class="w-96 h-96" v-if="isTagSelectedElement(item.tag)">
        <img class="h-full w-full object-cover rounded-md" :src="item.img"/>
      </div>
    </div>
    <button class="border-4 rounded-lg px-6 py-2 text-xl flex flex-row justify-center items-center space-x-2"
            :class="{'cursor-not-allowed' : loading}"
            :disabled="loading"
            @click="loadMore">
      <svg-icon v-show="loading" name="loading" class="h-6 w-6 animate-spin"/>
      <span>{{ buttonText }}</span>
    </button>
  </section>
</template>
<script>
export default {
  name: 'GalleySlider',
  props: ['items', 'tags'],
  data: () => ({
    page: 1,
    selected: [],
    loading: false,
    buttonText: 'Показать ещё',
  }),
  methods: {
    isTagSelectedElement(tag) {
      if (this.selected.length) {
        return this.selected.indexOf(tag) !== -1;
      }
      return true;
    },
    isTagSelected(tag) {
      return this.selected.indexOf(tag) !== -1;
    },
    async selectTag(tag) {
      const tagIndex = this.selected.indexOf(tag);
      if (tagIndex === -1) {
        this.selected.push(tag);
      } else {
        this.selected.splice(tagIndex, 1);
      }
    },
    async loadMore() {
      this.loading = !this.loading;
      this.buttonText = 'Загрузка...';
      setTimeout(() => {
        this.loading = !this.loading;
        this.page++;
        this.items.push(...[
          {
            key: 0,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag1'
          },
          {
            key: 1,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag1'
          },
          {
            key: 2,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag1'
          },
          {
            key: 3,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag1'
          },
          {
            key: 4,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag2'
          },
          {
            key: 5,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag2'
          },
          {
            key: 6,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag2'
          },
          {
            key: 7,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag2'
          },
          {
            key: 8,
            img: require('@/assets/img/nogtevoy-servis.jpg'),
            tag: 'tag2'
          },
        ]);
        this.buttonText = 'Показать ещё';
      }, 2000);
    }
  }
}
</script>
