<template>
  <tab-bar>
    <div class="tab-bar-logo">
      <span>Hovey Lee</span>
    </div>
    <div class="tab-bar-slot">
    </div>
    <div class="tab-bar-content">
      <tar-bar-item link="/home">
        <i class="icon-shouye" slot="icon"></i>
        <span slot="text">首页</span>
      </tar-bar-item>
      <tar-bar-item link="/tabs">
        <i class="icon-biaoqian" slot="icon"></i>
        <span slot="text">标签</span>
      </tar-bar-item>
      <tar-bar-item link="/category">
        <i class="icon-leimupinleifenleileibie2" slot="icon"></i>
        <span slot="text">分类</span>
      </tar-bar-item>
      <tar-bar-item link="/archive">
        <i class="icon-xingzhuangjiehe1" slot="icon"></i>
        <span slot="text">归档</span>
      </tar-bar-item>
      <tar-bar-item link="/message">
        <i class="icon-liuyan-fill" slot="icon"></i>
        <span slot="text">留言板</span>
      </tar-bar-item>
      <tar-bar-item link="/friends">
        <i class="icon-lianjie" slot="icon"></i>
        <span slot="text">友链</span>
      </tar-bar-item>
      <tar-bar-item link="/about">
        <i class="icon-wode1" slot="icon"></i>
        <span slot="text">关于</span>
      </tar-bar-item>
    </div>
    <div class="tab-bar-search">
      <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search">
      </el-input>
    </div>
  </tab-bar>
</template>

<script>
  import TabBar from "@/components/content/tabbar/TabBar";
  import TarBarItem from "@/components/content/tabbar/TarBarItem";
  export default {
    name: "MainTabbar",
    components: {
      TabBar,
      TarBarItem
    }
  }
</script>

<style scoped lang="scss">
  .tab-bar {
    width: 70%;
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: space-around;
    .tab-bar-logo {
      font-size: 30px;
      width: 200px;
    }
    .tab-bar-content {
      display: flex;
      width: 900px;
    }
    .tab-bar-slot {
      width: 150px;
    }
    .tab-bar-search {
      width: 300px;
    }
  }
</style>