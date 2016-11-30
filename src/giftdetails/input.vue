<template lang="html">
<div class="gift-input">
  <div class="wrap">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-pinglun"></use>
    </svg>
    <input type="text" name="name" value="" placeholder="我也来说说">
  </div>

</div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.gift-input {
  background: #f5f3f4;
  //margin-top: 10px;
  height: 96px;
  text-align: center;
  clear: both;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.gift-input .wrap {
  padding-top: 21px;
  padding-bottom: 21px;
  text-align: center;
  height: 100%;
  position: relative;
}
.gift-input svg {
  width: 35px;
  height: 35px;
  position: absolute;
  top:30.5px;
  left: 22px;
}
.gift-input input {
  //border: 1px solid goldenrod;
  height: 54px;
  width: 372px;
  border-radius: 22px;
  background: #e2e2e2;
  font-size: 16px;/*px*/
  line-height: 54px;
  padding-left: 99px;

}
</style>
