<template>
  <div class="m-choose-icon-dialog-body-height">
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
          :key="index"
          @click="clickItem(item)"
        >
          <div class="text">
            <component :is="item"></component>
          </div>
          <div class="icon">{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { useCopy } from '../../../hooks/useCopy'
let props = defineProps<{
  // 弹出框的标题
  title: string
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()
let emits = defineEmits(['update:visible'])
let handleClick = () => {
  // 需要改变父组件的值
  emits('update:visible', !props.visible)
}

let dialogVisible = ref<boolean>(props.visible)

// 点击图标复制
let clickItem = (item: string) => {
  let text = `<el-icon><${item} /></el-icon>`
  useCopy(text)
  dialogVisible.value = false
}

// 监听visible的变化，只能监听第一次的变化
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  },
)
// 监听组件内部的dislogVisible的变化
watch(
  () => dialogVisible.value,
  (val) => {
    emits('update:visible', val)
  },
)
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  height: 70px;
}
.text {
  font-size: 14px;
}
.icon {
  flex: 1;
}
</style>
