import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
import '@/assets/css/_app_icon.scss'

const app = createApp(App)

// 全局注册组件
const requireComponents = require.context('./components', true, /.vue$/)
requireComponents.keys().forEach((fileName) => {
  // 获取组件配置
  const componentConfig = requireComponents(fileName)

  let componentName = fileName.slice(2, -4)
  componentName = componentName
    .split('/')
    [componentName.split('/').length - 1].replace(/_/g, '-')
  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(store).use(router).use(ElementPlus).mount('#app')
