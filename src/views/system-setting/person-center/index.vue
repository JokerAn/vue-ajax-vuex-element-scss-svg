<template>
  <div>
    个人中心
    <upload-files v-model="fileData"></upload-files>
    <el-button @click="getUploadFiles()">获取上传文件</el-button>
    <img :src="fileData.url" alt="" srcset="">
  </div>
  
</template>

<script>
export default {
  data(){
    return {
      fileData: {
        url: ''
      }
    }
  },
  methods: {
    getUploadFiles () {
      console.log(this.fileData)
    }
  }
}
</script>

<style>

</style>