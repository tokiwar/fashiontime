<template>
  <div></div>
</template>
<script>
export default {
  async asyncData({params, error, $axios, route}) {
    const detailPageUrl = params.detail;
    console.log(detailPageUrl);
  }
}
</script>
