<template>
  <div class="">
    <romanski-header></romanski-header>
    <romanski-category></romanski-category>
    <romanski-tag></romanski-tag>
    <romanski-issue></romanski-issue>
    <divider></divider>

  </div>
</template>

<script>
import RomanskiHeader from './header.vue'
import RomanskiCategory from './category.vue'
import RomanskiTag from './tag.vue'
import RomanskiIssue from './issue.vue'
import Divider from '../divider/divider.vue'

export default {
  name: 'gift',
  components: {
    RomanskiHeader,
    RomanskiCategory,
    RomanskiTag,
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
