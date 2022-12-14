import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import mUI from './components'
import './mock'
import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(mUI)
app.use(router)
app.mount('#app')
