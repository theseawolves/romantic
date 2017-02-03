<template lang="html">
<div class="">
  <romanski-header></romanski-header>
  <romanski-sort></romanski-sort>

</div>
</template>

<script>
import RomanskiHeader from './header.vue'
import RomanskiSort from './sort.vue'


export default {
  name: 'giftCategory',
  components: {
    RomanskiHeader,
    RomanskiSort,
  }
}
</script>

<style lang="css">
</style>
