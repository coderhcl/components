<template>
  <template v-for="item in props.list" :key="item.index">
    <!-- 子菜单内具有下级菜单，使用el-sub-menu渲染分级 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 0"
      :index="item.index"
    >
      <template #title>
        <component v-if="item.icon" :is="item.icon"></component>
        <span>{{ item.name }}</span>
      </template>

      <!-- 递归组件 - 此组件为当前组件 -->
      <MenuItem :list="item.children"></MenuItem>
    </el-sub-menu>
    <el-menu-item :index="item.index" v-else>
      <component v-if="item.icon" :is="item.icon"></component>
      {{ item.name }}
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup>
import { MenuItemType } from './types'

// 定义props接收的字段
interface Props {
  list: MenuItemType[]
}

// 获取父组件传进来的子菜单列表
const props = defineProps<Props>()
</script>

<style scoped lang="scss">
.el-sub-menu {
  height: 50px !important;
}
svg {
  margin-right: 6px;
}
</style>
