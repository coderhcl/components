import { App } from 'vue'
import menu from './src/index.vue'
// import infiniteMenu from './src/menu.vue'
export default {
  install(app: App) {
    app.component('m-menu', menu)
    // app.component('m-infinite-menu', infiniteMenu)
  },
}
