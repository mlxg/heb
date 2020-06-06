<template>
  <div class="index-layout">
    <el-backtop
      target=".index-layout"
      :visibility-height="50"
      :right="184"
      :bottom="376"
    ></el-backtop>
    <nuxt />
    <hc-footer></hc-footer>
  </div>
</template>

<script>
import HcFooter from '~/components/hc-footer'
export default {
  components: {
    HcFooter
  }
}
</script>
<style lang="less" scoped>
.index-layout {
  min-width: 1200px;
  height: 100vh;
  overflow: auto;
}
</style>
