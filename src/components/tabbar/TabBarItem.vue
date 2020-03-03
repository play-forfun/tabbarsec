<template>
  <div class="tab-bar-item">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-active-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data(){
      return{
        isActive:true
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    /*text-align: center;*/
    /*height: 49px;*/
    /*font-size: 14px;*/
  }

  .tab-bar-item img {
    height: 24px;
  }
</style>