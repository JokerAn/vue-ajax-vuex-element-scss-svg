const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  'publicPath': '/', // 公共路径
  'outputDir': process.env.VUE_APP_OUTPUTDIR, // 不同的环境打不同包名
  'lintOnSave': false, // 关闭eslint

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录默认：''
  'assetsDir': 'assets',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)默认：'index.html'
  'indexPath': 'index.html',

  //生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存,默认true true==>app.e2713bb0.css false==>app.css
  'filenameHashing': true,

  // 是否生成.map文件 .map文件作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
  // 默认：true 开发环境设置为false加速开发 发布环境设置为true
  'productionSourceMap': false,

  'devServer': {
    // 配置服务器
    'port': 7788,
    'open': true,
    'https': false,
    'overlay': {
      'warnings': true,
      'errors': true
    },
    proxy: {
      //配置跨域
      '/cms': {
        target: process.env.VUE_APP_BASE_API,
        changOrigin: true,
        pathRewrite: {
          '^/cms': '/cms'
        }
      }
    }
  },
  

  'configureWebpack': config=> {
    let Obj = {
      // 覆盖webpack默认配置的都在这里
      'resolve': {
        // 配置解析别名
        'alias': {
          '@': path.resolve(__dirname, './src'),
          '@views': path.resolve(__dirname, './src/views')
        }
      },
      externals: {//import AMap from 'AMap'==> vue:vue 告诉项目如果用到了 AMap就 是window.AMap 就不会报找不到了
        AMap: 'AMap'
      },
      plugins: [
        new webpack.DllReferencePlugin({
          context: process.cwd(),
          manifest: require('./public/vendor/vendor-manifest.json')
        }),
      
        new AddAssetHtmlPlugin({
          // dll文件位置
          filepath: path.resolve(__dirname, './public/vendor/*.js'),
          // dll 引用路径
          publicPath: './vendor',
          // dll最终输出的目录
          outputPath: './vendor'
        }),
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,// 匹配文件名
          threshold: 10240,// 对超过10k的数据压缩
          deleteOriginalAssets: false// 不删除源文件
        })
      ]
        
    }
    //生产环境去除console

    if (process.env.NODE_ENV === 'production') {
      config.optimization.minimizer[0].options.terserOptions.compress['drop_console'] = true
    }
    return Obj 
  }
}