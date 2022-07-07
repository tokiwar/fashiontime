<template>
  <div class="h-auto flex flex-col space-y-10">
    <contacts-section/>
    <client-only>
      <store-map/>
    </client-only>
  </div>
</template>
<script>
export default {
  name: 'Contacts'
}
</script>
