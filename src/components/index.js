import UploadFiles from './uploadFiles/index.vue'

const componentUploadFiles = {
  install: function (Vue){
    Vue.component('upload-files',UploadFiles)
  }
} 

export default componentUploadFiles