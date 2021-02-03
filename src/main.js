import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'

const app = createApp(App)

const requireComponents = require.context('./components', true, /.vue$/)

requireComponents.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponents(fileName)

  let componentName = fileName.slice(2, -4)
  componentName = componentName.split('/')[componentName.split('/').length - 1].replace(/_/g, '-')
  console.log(componentName)
  app.component(componentName, componentConfig.default || componentConfig)
})

app.use(store).use(router).mount('#app')
