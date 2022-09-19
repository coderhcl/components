import { App } from 'vue'
import chooseArea from './chooseArea'
import choseIcon from './choseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
import menu from './menu'
import progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import chooseCity from './chooseCity'
import form from './form'
import table from './table'
import calendar from './calendar'
import login from './login'
import validCode from './validCode'
import fullScreen from './fullScreen'
import guide from './guide'
import dark from './dark'
import editor from './editor'
import mdEditor from './mdEditor'

const components = [
  chooseArea,
  choseIcon,
  trend,
  notification,
  list,
  menu,
  progress,
  chooseTime,
  chooseDate,
  chooseCity,
  form,
  table,
  calendar,
  login,
  validCode,
  fullScreen,
  guide,
  dark,
  editor,
  mdEditor,
]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
