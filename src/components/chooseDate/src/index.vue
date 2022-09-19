<template>
  <div style="display: flex">
    <div style="margin-right: 20px">
      <el-date-picker
        v-model="(startDate as Date)"
        type="date"
        :placeholder="startPlaceholder"
        :disabled-date="startDisableDate"
        v-bind="$attrs.startOptions"
      />
    </div>
    <div>
      <el-date-picker
        v-model="(endDate as Date)"
        type="date"
        :placeholder="endPlaceholder"
        :disabled="endDateDisabled"
        :disabled-date="endDisableDate"
        v-bind="$attrs.endOptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps({
  // 开始日期占位符
  startPlaceholder: {
    type: String,
    default: '请选择开始日期',
  },
  endPlaceholder: {
    type: String,
    default: '请选择结束日期',
  },
  disableToday: {
    type: Boolean,
    default: true,
  },
})
// 开始日期
let startDate = ref<Date | null>()
// 结束日期
let endDate = ref<Date | null>()
// 控制结束日期的禁用状态
let endDateDisabled = ref<boolean>(true)
// 禁用开始日期的函数
let startDisableDate = (time: Date) => {
  if (props.disableToday)
    return time.getTime() < Date.now() - 1000 * 60 * 60 * 24
}

// 禁用结束日期的函数
let endDisableDate = (time: Date) => {
  if (startDate.value)
    return time.getTime() < startDate.value.getTime() + 1000 * 60 * 60 * 24
}

const emits = defineEmits(['startChange', 'endChange'])
// 监听开始的时间
watch(
  () => startDate.value,
  (val) => {
    if (!val) {
      endDate.value = null
      endDateDisabled.value = true
    } else {
      emits('startChange', val)
      endDateDisabled.value = false
    }
  },
)
// 监听结束的日期
watch(
  () => endDate.value,
  (val) => {
    if (val) {
      emits('endChange', {
        startDate: startDate.value,
        endDate: val,
      })
    }
  },
)
</script>

<style lang="scss" scoped></style>
