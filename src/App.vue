<template>
  <div id="app">
    <el-container>
      <el-header class="header"><main-tabbar/></el-header>
      <el-main><router-view/></el-main>
      <vue-particles class="particles" />
    </el-container>
  </div>
</template>

<script>
  import MainTabbar from "@/components/common/mainTabber/MainTabbar";
  export default {
    name: "App",
    components: {
      MainTabbar
    }
  }
</script>

<style>
  @import "~@/assets/icon/iconfont.css";
  @import "~@/assets/css/normalize.css";
  
  .header {
    border-bottom: #f2f2f2 1px solid;
  }
  .particles {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
</style>
