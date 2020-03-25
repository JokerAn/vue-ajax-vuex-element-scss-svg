<template>
  <div class="header">
    <a class="changeAsideWidth" @click="changeAsideWidth()">
      <icon v-show="!leftOpen" name="close-left" :w="30" :h="30"></icon>
      <icon v-show="leftOpen" name="open-left" :w="30" :h="30"></icon>
    </a>
    <el-dropdown class="fr user-name" size="large" @command="handleCommand">
      <span class="el-dropdown-link">
        {{ userName }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">个人信息</el-dropdown-item>
        <el-dropdown-item command="2">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data(){
    return{
      leftOpen: false,
      userName: sessionStorage.getItem('userName')
    }
  },
  created(){},
  methods: {
    changeAsideWidth(){
      this.leftOpen = !this.leftOpen
      this.$emit('changeAsideWidth',this.leftOpen)
    },
    handleCommand(res){
      switch (res) {
        case '1':
          this.gotoPage()
          break
        case '2':
          this.logout()
          break
        default:
          break
          
      }
    },
    gotoPage(){
      console.log('更换页面')
    },
    logout(){
      sessionStorage.clear()
      this.$router.push({
        path: '/login'
      })
    }
  }

}
</script>

<style lang="scss" scoped>
 .changeAsideWidth{
   display: inline-block;
   width:50px;
   text-align: center;
   height:60px;
   line-height: 60px;
   cursor: pointer;
 }
 .user-name{
   margin:20px 20px 0 20px;
   cursor: pointer;
 }
</style>