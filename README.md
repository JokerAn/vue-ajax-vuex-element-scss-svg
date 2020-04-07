、、、
  cdn基本思路：将vue vue-router axios ...等通过cdn引入减少项目体积
  实现方式：
    在vue.config.js中配置isProd参数 如果是true就走cdn如果是false就按普通方式引入（develope不需要优化）
    在index.html中通过htmlWebpackPlugin插件（vue自带）来检测isProd判断是否是生产环境，如果是就加载cdn的资源
    区分不同的入口文件: main-dev.js,main-prod.js(如果插件中 没有用到css 的就可以省略区分入口文件)
    因为有些插件用到了css 需要在入口文件中import 'xxx.css' 
    而正式环境是cdn引入所以就不用在入口文件中写 import 'xxx.css'了 
  public/index.html
      <!-- 按需加载外部CDN资源 -->
    <% if(htmlWebpackPlugin.options.isProd){ %>
      <script src="https://cdn.bootcss.com/vue/2.6.11/vue.min.js"></script>
      <script src="https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js"></script>
      <script src="https://cdn.bootcss.com/axios/0.19.2/axios.min.js"></script>
    <% } %>
  
  vue.config.js
  chainWebpack(config){
    config.when(process.env.NODE_ENV === 'development', config =>{
      //设置入口文件为'./src/main-dev.js'
      config.entry('app').clear().add('./src/main-dev.js')
      // 定义一个参数isProd值为false
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })
    config.when(process.env.NODE_ENV === 'production', config =>{
      //设置入口文件为'./src/main-prod.js'
      config.entry('app').clear().add('./src/main-prod.js')
      // 定义一个参数isProd值为true
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
      // 跟configureWebpack中的externals配置一个道理
      config.set('externals',{
        // 告诉项目如果用到了 VueRouter 是 import VueRouter from 'vue-router' 就不会报找不到了
        //'包名': '自己定义的名称',
        'vue-router': 'VueRouter',
        axios: 'axios',
        vue: 'Vue'
      })
    })
  }