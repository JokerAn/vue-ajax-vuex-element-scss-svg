<template>
  <div>
    <p>高德地图</p>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.amap-wrapper {
  width: 500px;
  height: 500px;
}
</style>