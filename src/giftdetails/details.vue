<template>
  <div class="gift-details">
    <romanski-header></romanski-header>
    <romanski-intro></romanski-intro>
    <romanski-comment></romanski-comment>
    <romanski-related></romanski-related>
    <romanski-input></romanski-input>
  </div>
</template>

<script>
import RomanskiHeader from './header.vue'
import RomanskiIntro from './intro.vue'
import RomanskiComment from './comment.vue'
import RomanskiRelated from './related.vue'
import RomanskiInput from './input.vue'

export default {
  name: 'giftDetails',
  components: {
    RomanskiHeader,
    RomanskiIntro,
    RomanskiComment,
    RomanskiRelated,
    RomanskiInput

  }
}
</script>

<style>

</style>
