import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/2048/index', '^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#7A7E83',
      selectedColor: '#3cc51f',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: 'static/image/icon_component.png',
        selectedIconPath: 'static/image/icon_component_HL.png',
        text: '组件'
      }, {
        pagePath: 'pages/logs/main',
        iconPath: 'static/image/icon_component.png',
        selectedIconPath: 'static/image/icon_component_HL.png',
        text: '接口'
      }, {
        pagePath: 'pages/2048/index',
        iconPath: 'static/image/icon_component.png',
        selectedIconPath: 'static/image/icon_component_HL.png',
        text: '2048'
      }]
    }
  }
}
