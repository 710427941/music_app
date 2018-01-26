<template>
  <div>
    <header class="header">
      <div class="icon"></div>
      <h1 class="text">Chicken Music</h1>
      <router-link tag="div" class="mine" to="">
        <i class="icon-mine"></i>
      </router-link>
    </header>
  </div>
</template>

<script>
export default {
  name: 'base-header'
}
</script>

<style lang="less" scoped>
  @import "../../assets/less/variable";
  @import "../../assets/less/mixin";

  .header{
    position: relative;
    height: 44px;
    text-align: center;
    color: @color-theme;
    font-size: 0;
    .icon{
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      .bg-image('../images/logo');
      background-size: 30px 32px;
    }
    .text{
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: @font-size-18;
      font-weight: normal;
    }
    .mine{
      position: absolute;
      top: 0;
      right: 0;
      .icon-mine{
        display: block;
        padding: @font-size-12;
        font-size: @font-size-20;
        color: @color-theme
      }
    }
  }
</style>
