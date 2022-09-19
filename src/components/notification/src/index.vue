<template>
  <el-popover
    popper-class="notification-popper-class"
    placement="bottom"
    :width="300"
    trigger="click"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge :value="value" :is-dot="isDot">
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

<style lang="scss" scoped>
.el-badge {
  cursor: pointer;
}
svg {
  width: 1.2em;
  height: 1.2em;
}
</style>
