<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TarBarItem from "@/components/content/tabbar/TarBarItem";
  export default {
    name: "TabBar",
    components: {
      TarBarItem
    }
  }
</script>

<style scoped>

</style>