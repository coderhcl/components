<template>
  <div @click="onToggle">
    <el-icon :size="20" v-if="isFullScreen"><Aim /></el-icon>
    <el-icon :size="20" v-else><FullScreen /></el-icon>
  </div>
</template>

<script lang="ts" setup>
// 网页全屏
import screenfull from 'screenfull'
const isFullScreen = ref(false)
// 触发时间
const onToggle = () => {
  screenfull.toggle()
}
// 监听screenfull的变化
const change = () => {
  isFullScreen.value = screenfull.isFullscreen
}
// on:绑定监听
onMounted(() => {
  screenfull.on('change', change)
})
// off取消监听
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style lang="scss" scoped></style>
