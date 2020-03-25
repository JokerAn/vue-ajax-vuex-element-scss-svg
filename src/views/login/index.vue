<template>
  <div id="login">
    <div class="name-pwd">
      <h3>CMS管理系统</h3>
      <p>
        <span>账号</span>
        <el-input v-model="username"></el-input>
      </p>
      <p>
        <span>密码</span>
        <el-input v-model="password" type="password"></el-input>
      </p>
      <ol>
        <el-button :loading="loading" style="width:342px;" size="large" @click="loginF">确定</el-button>
      </ol>
    </div>
  </div>
</template>

<script>
import {loginApi } from '@/apis/login'
import {noValue } from '@/utils/public'
export default {
  data() {
    return {
      username: 'haoyue.ge@ambow.com',
      password: '111111',
      loading: false
    }
  },
  created(){
    if(sessionStorage.getItem('token')){
      this.$router.push({ path: '/system-setting/person-center' })

    }
  },
  methods: {
    loginF(){
      let canshu = {
        username: this.username,
        password: this.password
      }

      if(noValue(this.username)){
        this.$message({
          type: 'warning',
          message: '请填写账号名称'
        })
        return 
      }
      if(noValue(this.password)){
        this.$message({
          type: 'warning',
          message: '请填写密码'
        })
        return 
      }
      this.loading = true
      loginApi(canshu).then((result)=>{
        this.loading = false
        console.log(result)
        sessionStorage.setItem('token',result.data.token)
        sessionStorage.setItem('userName',result.data.realname)
        sessionStorage.setItem('appId',result.data.appList[0].id)
        this.$router.push({ path: '/system-setting/person-center' })

      }).catch(err=>{
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#login{
  width:100%;
  height:100vh;
  background:url(~@/assets/images/login.jpg)no-repeat center center;
  background-size: 100% 100%;
  .name-pwd{
    background:#fff;
    border-radius:3px;
    text-align: center;
    padding:30px 10px;
    width:400px;
    position: fixed;
    top:50%;
    left:50%;
    margin-top:-120px;
    margin-left: -200px;
    h3{
      margin-bottom:30px;
    }
  }
  ::v-deep .el-input{
    display: inline-block;
    width:300px;
  }
  p{
    margin-bottom:20px;
    span{
      margin-right:10px;
    }
  }
}
</style>