<template>
  <el-popover placement="bottom" :width="300" trigger="click">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="value" :max="max" :is-dot="isDot">
        <component :is="icon"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: 'Bell',
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: '',
  },
  // 最大值
  max: {
    type: Number,
  },
  // 小圆点
  isDot: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scope>
.el-badge {
  cursor: pointer;
}
</style>
