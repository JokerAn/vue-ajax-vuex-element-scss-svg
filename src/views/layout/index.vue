<template>
  <div>
    <div id="content-left">
      <my-aside :open-or-close="openOrClose"></my-aside>
    </div>
    <div id="content-right" :class="[openOrClose ? 'width64' : 'width200']">
      <my-header id="header" @changeAsideWidth="changeAsideWidthF"></my-header>
      <div id="mainView">
        <router-view></router-view>
      </div>
    </div>
    
  </div>
</template>

<script>
import MyHeader from './header'
import MyAside from './aside'
export default {
  components: {
    MyHeader,
    MyAside
  },
  data() {
    return {
      routes: [],
      defaultOpeneds: [],
      locationPath: '',
      //左侧默认200px
      openOrClose: false
    }
  },
  created() {},

  methods: {
    changeAsideWidthF(res) {
      this.openOrClose = res
    }
  }
}
</script>

<style lang="scss" scoped>
#content-left {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 1px 0 4px rgba(0, 21, 41, 0.08);
  ::v-deep .el-menu {
    width: 200px;
    border:none;
  }
  ::v-deep .el-menu--collapse {
    width: 64px;
    border:none;
  }
}
#content-right{
  height:100vh;
  position: fixed;
  top: 0;
  right: 0;
  height: 60px;
  background: #fff;
  &.width64 {
    left: 65px;
    transition: left 0.4s;
  }
  &.width200 {
    left: 201px;
    transition: left 0.4s;
  }
}

#header {
  height:60px;
  border-bottom: 1px solid;

}
#mainView {
  padding:10px;
  height: calc( 100vh - 60px );
  overflow: auto;
}
</style>
