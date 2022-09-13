<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>
    <div class="icon">
      <el-icon
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
        v-if="type === 'up'"
      >
        <component :is="upIcon"></component>
      </el-icon>
      <el-icon
        v-else
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
      >
        <component :is="downIcon"></component>
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
let props = defineProps({
  // 标记当前趋势是上升还是下降
  type: {
    type: String,
    default: 'up',
  },
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp',
  },
  downIcon: {
    type: String,
    default: 'ArrowDown',
  },
  // 下降趋势显示的图标
  // 趋势显示的文字
  // 1、父组件传递过来的值
  // 2、插槽
  text: {
    type: String,
    default: '文字',
  },
  // 颜色反转，只在默认颜色生效
  reverseColor: {
    type: Boolean,
    default: false,
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d',
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c41a',
  },
  // 上升文字的颜色
  upTextColor: {
    type: String,
    default: 'rgb(0,0,0)',
  },
  // 下降文字的颜色
  downTextColor: {
    type: String,
    default: 'rgb(0,0,0)',
  },
})
let slots = useSlots()

let textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor
})
</script>

<style lang="scss" scope>
.trend {
  display: flex;
  align-items: center;
  .text {
    font-size: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
