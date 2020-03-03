<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar {
    background-color: #f6f6f6;
    display: flex;
    text-align: center;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>