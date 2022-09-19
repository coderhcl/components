import { App } from 'vue'
import mdEditor from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-md-editor', mdEditor)
  },
}
