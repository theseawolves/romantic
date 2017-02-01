<template>
  <div class="gift-details">
    <romanski-header></romanski-header>
    <romanski-intro></romanski-intro>
    <romanski-related></romanski-related>
  </div>
</template>

<script>
import RomanskiHeader from './header.vue'
import RomanskiIntro from './intro.vue'
import RomanskiRelated from './related.vue'

export default {
  name: 'giftDetails',
  components: {
    RomanskiHeader,
    RomanskiIntro,
    RomanskiRelated

  }
}
</script>

<style>

</style>
