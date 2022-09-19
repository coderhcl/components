<template>
  <div>
    <m-calendar
      :events="events"
      @dateClick="dateClick"
      @eventClick="eventClick"
      displayEventEnd
    ></m-calendar>
  </div>
</template>

<script lang="ts" setup>
import { EventClickArg, EventContentArg } from '@fullcalendar/core'
import { DateClickArg } from '@fullcalendar/interaction'
import { EventItem } from '../../components/calendar/src/types'

let events = ref<EventItem[]>([
  {
    title: '购物',
    start: '2022-09-11 08:00:00',
    end: '2022-09-11 12:00:00',
    editable: true,
  },
  {
    title: '敲代码',
    start: '2022-09-16 10:00:00',
    end: '2022-09-27 12:00:00',
    editable: true,
  },
])
let dateClick = (info: DateClickArg) => {
  events.value.push({
    start: info.dateStr + ' 12:00:00',
    end: info.dateStr + ' 18:00:00',
    title: '学习',
  })
  console.log('info', info)
}
let eventClick = (info: EventClickArg) => {
  console.log('eventClick', info)
}

let eventContent = (arg: EventContentArg) => {
  let el = document.createElement('div')
  console.log(arg)
  el.innerHTML = `
        <img src="src/assets/vue.svg" style="width:20px;height:20px;">

         <div>标题: ${arg.event._def.title}</div>
        `
  return {
    domNodes: [el],
  }
}
</script>

<style lang="scss" scoped></style>
