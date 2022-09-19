<template>
  <div>
    <el-icon :size="20" @click="onClick" id="guide-start"><Guide /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import { steps } from './steps'
let driver: any = null
onMounted(() => {
  driver = new Driver({
    // 禁止点击蒙版关闭
    allowClose: false,
    closeBtnText: '关闭',
    nextBtnText: '下一个',
    prevBtnText: '上一个',
  })
})

const onClick = () => {
  driver.defineSteps(steps())
  driver.start()
}
</script>

<style lang="scss" scoped></style>
