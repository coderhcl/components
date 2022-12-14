<template>
  <div id="calendar"></div>
</template>

<script lang="ts" setup>
import '@fullcalendar/core/vdom'
import { Calendar, EventClickArg } from '@fullcalendar/core'
import daygrid from '@fullcalendar/daygrid'
import interaction, { DateClickArg } from '@fullcalendar/interaction'
import { PropType } from 'vue'
import { EventItem } from './types'
let props = defineProps({
  // 日历显示的语言
  local: {
    type: String,
    default: 'zh-cn',
  },
  // 视图模式
  initialView: {
    type: String,
    default: 'dayGridMonth',
  },
  // 按钮文字
  buttonText: {
    type: Object,
    default: () => {
      return {
        today: '今天',
        month: '月',
        week: '周',
        day: '日',
        prevYear: '上一年',
        nextYear: '下一年',
        prev: '上一月',
        next: '下一月',
      }
    },
  },
  // 头部工具栏
  headerToolbar: {
    type: Object,
    default: () => {
      return {
        start: 'title',
        center: '',
        end: 'prev today next',
      }
    },
  },
  // 底部工具栏
  footerToolbar: {
    type: Object,
  },
  // 日历事件
  events: {
    type: Array as PropType<EventItem[]>,
    default: () => [],
  },
  displayEventEnd: {
    type: Boolean,
    default: false,
  },
  // 自定义渲染内容方法
  eventContent: {
    type: Function,
  },
})

const emits = defineEmits(['dateClick', 'eventClick'])
// 日历实例
let calendar = ref<Calendar>()
let renderCalendar = () => {
  let el = document.getElementById('calendar')
  if (el) {
    calendar.value = new Calendar(el, {
      plugins: [daygrid, interaction],
      locale: props.local,
      initialView: props.initialView,
      buttonText: props.buttonText,
      headerToolbar: props.headerToolbar,
      footerToolbar: props.footerToolbar,
      eventSources: [
        {
          // 渲染函数事件
          events(e, callback) {
            if (props.events.length) callback(props.events)
            else callback([])
          },
        },
      ],
      // 点击日历上的某一天
      dateClick(info: DateClickArg) {
        emits('dateClick', info)
      },
      eventClick(info: EventClickArg) {
        emits('eventClick', info)
      },
      displayEventEnd: props.displayEventEnd,
      eventContent: props.eventContent,
    })
    calendar.value.render()
  }
}

onMounted(() => {
  renderCalendar()
})

watch(
  () => props.events,
  () => {
    renderCalendar()
  },
  {
    deep: true,
  },
)
</script>

<style lang="scss" scoped>
#calendar {
  width: 800px;
  height: 800px;
  margin: 0 auto;
}
</style>
