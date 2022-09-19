<template>
  <div class="menuContainer">
    <el-menu
      :default-active="defaultActive"
      :router="router"
      v-bind="$attrs"
      class="el-menu-vertical-demo"
    >
      <template v-for="item in data" :key="item.index">
        <!-- 分级菜单 - 此一级菜单不应具有跳转功能 -->
        <el-sub-menu
          v-if="item.children && item.children.length"
          :index="item.index"
        >
          <template #title>
            <el-icon>
              <component v-if="item.icon" :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <!-- 下级菜单 -->
          <MenuItem :list="item.children"></MenuItem>
        </el-sub-menu>
        <!-- 一级菜单 -->
        <el-menu-item v-else :index="item.index">
          <el-icon>
            <component v-if="item.icon" :is="item.icon"></component>
          </el-icon>
          <template #title> {{ item.name }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
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
  border-right: 0 !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
