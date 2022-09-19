import { App } from 'vue'
import dark from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-dark', dark)
  },
}
