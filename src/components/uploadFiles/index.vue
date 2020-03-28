<template>
  <div class="upload-files-an">
    <el-upload
      action="http://10.10.113.65:9060/app/sys/app/sysFeedback/uploadImg"
      :headers="headers"
      :multiple="multiple"
      :data="params"
      :accept="accept"
      :auto-upload="autoUpload"
      :disabled="disabled"
      :limit="limit"
      :list-type="listType"
      :on-preview="onPreview"
      :on-remove="onRemove"
      :on-success="onSuccess"
      :on-progress="onProgress"
      :on-change="onChange"
      :on-error="onError"
      :before-upload="beforeUpload"
      :on-exceed="onExceed"
      :before-remove="beforeRemove"
    >
      <el-button>选取文件上传</el-button>
      <!-- <i class="el-icon-plus"></i> -->
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UploadFiles',
  props: {
    fileSize: {//上传文件不能超过多少M
      type: Number,
      default: 1
    },
    limit: {//最多上传多少个文件
      type: Number,
      default: 1
    },
    accept: {//允许上传的文件类型
      type: String,
      default: 'image/png,image/gif,image/jpg,image/jpeg'
    },
    disabled: {//是否禁用
      type: Boolean,
      default: false
    },
    headers: {// 请求头
      type: Object,
      default: function(){
        return{ 'source': 1, 'token': 'a7fb6841-d68c-47fe-a7b6-38eca67d08d1' }
      }
    },
    multiple: {// 是否支持多选文件
      type: Boolean,
      default: false
    },
    params: {//请求额外带的参数
      type: Object,
      default: function(){
        return {}
      }
    },
    autoUpload: {//是否选上文件立马上传
      type: Boolean,
      default: true
    },
    listType: {// 文件支持类型 上传文样式 text/picture/picture-card
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    // 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
    onChange(file, fileList){
      console.log('文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用')
      console.log({file, fileList})
    },

    // 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    beforeUpload(file){
      console.log('上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。')
      console.log({file})

      if (!this.accept.includes(file.type)) {
        this.$message.warning({
          title: '警告',
          message: `请上传格式为${this.accept}的图片`
        })
        return false
      }

      if (file.size / 1024 / 1024 > this.fileSize) {
        this.$message.warning({
          title: '警告',
          message: `图片大小必须小于${this.fileSize}M`
        })
        return false
      }
    },

    // 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。
    beforeRemove(file, fileList){
      console.log('删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。')
      console.log({file, fileList})
    },

    // 文件上传成功的回调
    onSuccess(response, file, fileList){
      console.log('上传成功')
      console.log({response, file, fileList})
      const obj = {
        uid: file.uid,
        url: response.data//假设：后台会将网络图片地址返回到data里面data:http://images.ambow.com/c0975e348c2c4ec7b19b03b221d5f07f.png
      }

      this.$emit('input',obj)
    },
    
    // 文件上传失败的回调
    onError(err, file, fileList){
      console.log('上传失败')
      console.log({err, file, fileList})
    },

    // 文件上传时的钩子
    onProgress(event, file, fileList){
      console.log('文件上传时')
      console.log({event, file, fileList})
    },
    // 文件超出个数限制时的钩子
    onExceed(files, fileList){
      console.log('文件超出个数限制时的钩子')
      console.log({files, fileList})
    },

    // 文件列表移除文件时的钩子
    onRemove(file, fileList) {
      console.log(file, fileList)
    },

    // 点击文件列表中已上传的文件时的钩子
    onPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="less" scoped>

</style>