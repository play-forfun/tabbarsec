<template>
  <div id="app">
    <router-view/>
    <div id="tabbar">
      <div class="tabbaritem">
        <img src="./assets/img/tabbar/home.svg" alt="">
        <div>首页</div>
      </div>
      <div class="tabbaritem">
        <img src="./assets/img/tabbar/category.svg" alt="">
        <div>分类</div>
      </div>
      <div class="tabbaritem">
        <img src="./assets/img/tabbar/shopcart.svg" alt="">
        <div>购物车</div>
      </div>
      <div class="tabbaritem">
        <img src="./assets/img/tabbar/profile.svg" alt="">
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App"
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

  .tabbaritem {
    flex: 1;
  }

  img {
    height: 24px;
  }
</style>