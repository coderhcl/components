<template>
  <template v-for="item in props.list" :key="item.index">
    <!-- 子菜单内具有下级菜单，使用el-sub-menu渲染分级 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 0"
      :index="item.index"
    >
      <template #title>
        <el-icon>
          <component v-if="item.icon" :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </template>

      <!-- 递归组件 - 此组件为当前组件 -->
      <MenuItem :list="item.children"></MenuItem>
    </el-sub-menu>
    <el-menu-item :index="item.index" v-else>
      <el-icon>
        <component v-if="item.icon" :is="item.icon"></component>
      </el-icon>
      <template #title> {{ item.name }}</template>
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
svg {
  margin-right: 6px;
}
</style>
