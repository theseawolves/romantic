<template>
  <div class="">
    <romanski-header></romanski-header>
    <romanski-category></romanski-category>
    <romanski-tag></romanski-tag>

  </div>
</template>

<script>
import RomanskiHeader from './header.vue'
import RomanskiCategory from './category.vue'
import RomanskiTag from './tag.vue'

export default {
  name: 'gift',
  components: {
    RomanskiHeader,
    RomanskiCategory,
    RomanskiTag
  },
  data: function () {
    return {
    }
  },
  computed: {},
  attached: function () {},
  methods: {}
}
</script>

<style>
</style>
