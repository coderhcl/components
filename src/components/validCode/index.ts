import { App } from 'vue'
import validCode from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-valid-code', validCode)
  },
}
