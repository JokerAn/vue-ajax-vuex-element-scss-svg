
import Vue from 'vue'
function changeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
const requireComponent = require.context('./', true, /\.vue$/)

requireComponent.keys().forEach((fileName) => {
  let config = requireComponent(fileName)
  
  fileName = fileName.replace(/^\.\//, '').replace(/\w*\//g, '').replace(/\.\w+$/, '')
  let componentName = 'public' + changeStr(
    fileName.toLowerCase() === 'index' ? 
      config.default ? config.default.name : config.name :
      fileName)

  Vue.component(componentName, config.default || config)
})