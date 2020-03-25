<template>
  <div>
    <div v-for="item in icons" :key="item" class="icon-one">
      <icon :name="item" :w="50" :h="50"></icon>
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
import icons from './icons-svg'
export default {
  name: 'Icons',
  data(){
    return {
      icons
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon-one{
    text-align: center;
    display: inline-block;
    margin: 5px;
  }
</style>