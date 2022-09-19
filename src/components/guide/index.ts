import { App } from 'vue'
import guide from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-guide', guide)
  },
}
