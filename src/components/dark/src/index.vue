<template>
  <div>
    <el-switch
      v-model="dark"
      inline-prompt
      @click="toggleDark()"
      :active-icon="Moon"
      :inactive-icon="Sunny"
      style="--el-switch-on-color: ##282c34; --el-switch-off-color: #eee"
    />
  </div>
</template>

<script lang="ts" setup>
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const dark = ref(isDark.value)
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped></style>
