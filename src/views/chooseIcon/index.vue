<template>
  <div>
    <m-choose-icon title="选择图标" v-model:visible="visible">
      选择图标
    </m-choose-icon>
  </div>
</template>

<script lang="ts" setup>
let visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
