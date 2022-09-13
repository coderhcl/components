<template>
  <div class="header">
    <span @click="toggle">
      <Expand v-if="collapse"></Expand>
      <Fold v-else />
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  collapse: Boolean
}>()

let emit = defineEmits(['update:collapse'])
let toggle = () => {
  // 需要修改父组件的值
  emit('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
