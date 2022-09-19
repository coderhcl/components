<template>
  <el-progress :percentage="p" v-bind="$attrs"></el-progress>
</template>

<script lang="ts" setup>
let props = defineProps({
  // 进度条
  percentage: {
    type: Number,
    default: 0,
  },
  // 是否有动画
  isAnimation: {
    type: Boolean,
    default: false,
  },
  // 动画时长(毫秒)
  time: {
    type: Number,
    default: 1000,
  },
})
let p = ref(0)
onMounted(() => {
  if (props.isAnimation) {
    // 规定时间内加载完成
    let t = Math.ceil(props.time / props.percentage)
    let timer = setInterval(() => {
      p.value += 1
      if (p.value >= props.percentage) {
        p.value = props.percentage
        clearTimeout(timer)
      }
    }, t)
  } else {
    p.value = props.percentage
  }
})
</script>

<style lang="scss" scoped></style>
