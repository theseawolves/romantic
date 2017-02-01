<template lang="html">
<div class="">
  <romanski-header></romanski-header>
  <romanski-sort></romanski-sort>
  <romanski-list></romanski-list>
  <romanski-list2></romanski-list2>

</div>
</template>

<script>
import RomanskiHeader from './header.vue'
import RomanskiSort from './sort.vue'
import RomanskiList from './list.vue'
import RomanskiList2 from './list2.vue'

export default {
  name: 'giftCategory',
  components: {
    RomanskiHeader,
    RomanskiSort,
    RomanskiList,
    RomanskiList2
  }
}
</script>

<style lang="css">
</style>
