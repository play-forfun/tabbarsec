<template>
  <div class="tab-bar-item" @click="ItemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-active-icon"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        // isActive:true,
      }
    },
    props: {
      path: String,
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    methods: {
      ItemClick() {
        return this.$router.replace(this.path)
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

  .active {
    color: #409EFF;
    /*background-color: red;*/
  }
</style>