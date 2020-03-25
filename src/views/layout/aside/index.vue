<template>
  <div>
    <el-menu
      :default-openeds="defaultOpeneds"
      class="el-menu-vertical-demo"
      :collapse="openOrClose"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu v-for="item in routes" :key="item.path" :index="item.path">
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-for="i in item.children">
          <el-menu-item
            v-if="!i.meta.hidden"
            :key="i.path"
            :index="i.path"
            :route="{ patj: i.path }"
            :class="[
              item.path + '/' + i.path === locationPath ? 'is-active' : ''
            ]"
          >
            <router-link :to="item.path + '/' + i.path" tag="div">{{
              i.meta.title
            }}</router-link>
          </el-menu-item>
        </template>
        
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import router, { routes } from '@/router'

export default {
  name: 'MyAside',
  props: {
    openOrClose: {
      type: [Boolean],
      default: false
    }
  },
  data() {
    return {
      routes: [],
      defaultOpeneds: [],
      locationPath: ''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        // console.log('传递过来的路由参数是', this.$route)
        this.routes = routes
        this.locationPath = this.$route.path
        this.defaultOpeneds = ['/' + this.$route.fullPath.split('/')[1]]
        // console.log(this.defaultOpeneds, this.locationPath)
      },
      immediate: true //不要写这个 这个会一进页面触发一次 会跟created中的方法重复运行
      //第一次就走created中的方法 就行了
    }
  },
  methods: {
    handleOpen(res) {
      console.log('handleOpen', res)
    },
    handleClose() {
      console.log('handleClose')
    }
  }

}
</script>

<style>

</style>