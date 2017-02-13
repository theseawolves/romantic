<template>
  <div class="">
    <romanski-header2></romanski-header2>
    <romanski-category2></romanski-category2>
    <romanski-tag2></romanski-tag2>
    <romanski-issue></romanski-issue>


  </div>
</template>

<script>
import RomanskiHeader2 from './header2.vue'
import RomanskiCategory2 from './category2.vue'
import RomanskiTag2 from './tag2.vue'
import RomanskiIssue from './issue.vue'
import Divider from '../divider/divider.vue'

export default {
  name: 'gift',
  components: {
    RomanskiHeader2,
    RomanskiCategory2,
    RomanskiTag2,
    RomanskiIssue,
    Divider
  },
  data: function () {
    return {
    }
  }
}
</script>

<style>
</style>
