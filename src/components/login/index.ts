import { App } from 'vue'
import login from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-login', login)
  },
}
