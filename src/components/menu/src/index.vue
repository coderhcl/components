<template>
  <el-menu :default-active="defaultActive" :router="router">
    <template v-for="item in data" :key="item.index">
      <!-- 分级菜单 - 此一级菜单不应具有跳转功能 -->
      <el-sub-menu
        v-if="item.children && item.children.length"
        :index="item.index"
      >
        <template #title>
          <component v-if="item.icon" :is="item.icon"></component>
          <span>{{ item.name }}</span>
        </template>
        <!-- 下级菜单 -->
        <MenuItem :list="item.children"></MenuItem>
      </el-sub-menu>
      <!-- 一级菜单 -->
      <el-menu-item v-else :index="item.index">
        <component v-if="item.icon" :is="item.icon"></component>
        {{ item.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { MenuItemType } from './types'
let props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array as PropType<MenuItemType[]>,
    require: true,
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: '',
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.el-menu {
  height: 100vh;
}
svg {
  margin-right: 6px;
}
</style>
