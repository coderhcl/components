import { App } from 'vue'
import chooseArea from './chooseArea'
import choseIcon from './choseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
const components = [chooseArea, choseIcon, trend, notification, list, menu]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
