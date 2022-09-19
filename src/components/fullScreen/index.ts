import { App } from 'vue'
import fullScreen from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-full-screen', fullScreen)
  },
}
