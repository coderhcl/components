import { App } from 'vue'
import trend from './src/index.vue'
export default {
  install(app: App) {
    app.component('m-trend', trend)
  },
}
export const turnCase = (str, type) => {
  switch (type) {
    case 1:
      return str.toUpperCase()
    case 2:
      return str.toLowerCase()
    case 3:
      //return str[0].toUpperCase() + str.substr(1).toLowerCase() // substr 已不推荐使用
      return str[0].toUpperCase() + str.substring(1).toLowerCase()
    default:
      return str
  }
}