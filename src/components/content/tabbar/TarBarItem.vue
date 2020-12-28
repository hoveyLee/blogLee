<template>
  <div class="tab-bar-item"
       @click="itemClick"
       @mouseenter="itemMove"
       :class="{'active': $route.path === link, 'hover': isShowClass}"
       @mouseleave="itemLeave">
    <slot name="icon"></slot><slot name="text"></slot>
  </div>
</template>

<script>
  export default {
    name: "TarBarItem",
    data() {
      return {
        isShowClass: false
      }
    },
    props: {
      link: {
        type: String,
        default: ""
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link);
      },
      itemMove() {
        this.isShowClass = true;
      },
      itemLeave() {
        this.isShowClass = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-bar-item {
    height: 80px;
    line-height: 80px;
    text-align: center;
    flex: 1;
    border-bottom: 2px dashed #ffffff;
    i {
      color: #999;
      margin-right: 12px;
      font-size: 22px;
    }
  }
  .tab-bar-item.active {
    color: #409EFF;
    i {
      color: #409EFF;
    }
  }
  .tab-bar-item.hover {
    background-color: #f3f8ff;
    border-color: #409EFF;
    color: black;
    i {
      color: #999;
    }
  }
</style>