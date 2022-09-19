<template>
  <el-form v-bind="$attrs">
    <el-form-item
      :prop="item.prop"
      :label="item.label"
      v-for="(item, index) in options"
      :key="index"
    >
      <component :is="item.type"></component>
      <!-- <el-input></el-input> -->
      <!-- <component v-bind="item.attrs" :is="`el-${item.type}`" /> -->
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
import { FormOptions } from './types/types'

let props = defineProps({
  options: {
    // 表单的配置项
    type: Array as PropType<FormOptions[]>,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
